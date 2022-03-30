<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import liff from "@line/liff";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

type UserProfile = {
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
  };
};

const isInClient = ref<boolean | "NOT_INITIALIZED">("NOT_INITIALIZED");
const userProfile = reactive<UserProfile>({
  profile: undefined,
});

const formSchema = yup.object({
  first_name: yup.string().required("性は必須項目です"),
  last_name: yup.string().required("名は必須項目です"),
  email: yup.string().required("メールアドレスは必須項目です").email("有効なメールアドレスをご入力ください"),
  phone: yup
    .string()
    .required("電話番号は必須項目です")
    .matches(/^0\d{2,3}-\d{1,4}-\d{4}$/, "有効な電話番号をご入力ください"),
  detail: yup.string().required("詳細は必須項目です"),
});

const { errors, handleSubmit } = useForm({ validationSchema: formSchema });

// フォームデータバリデーション
const { value: first_name } = useField<string>("first_name");
const { value: last_name } = useField<string>("last_name");
const company = ref<string>("");
const { value: email } = useField<string>("email");
const { value: phone } = useField<number>("phone");
const { value: detail } = useField<string>("detail");

onMounted(async () => {
  // LIFFブラウザで起動しているかの判定
  if (liff.isInClient()) {
    isInClient.value = true;
    getProfile();
    return;
  }

  isInClient.value = false;
});

const getProfile = async () => {
  const profile = await liff.getProfile();
  userProfile.profile = profile;
};

const sendMessages = handleSubmit(async (values) => {
  if (!liff.isInClient()) {
    window.alert("現在、LIFFを外部ブラウザで開いているため、このボタンは使用できません。");
  } else {
    await liff
      .sendMessages([
        {
          type: "text",
          text:
            "__お問い合わせ__" +
            "\n" +
            first_name.value +
            "\n" +
            last_name.value +
            "\n" +
            company.value +
            "\n" +
            email.value +
            "\n" +
            phone.value +
            "\n" +
            detail.value,
        },
      ])
      .then(() => {
        // window.alert("");
        liff.closeWindow();
      })
      .catch((error) => {
        window.alert("Error sending message: " + error);
      });
  }
});
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">お問い合わせ</h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          当社・当サイトへのお問い合わせにつきましては、お電話または下記フォームよりお問い合わせいただけます。
        </p>
      </div>
      <!-- text - end -->

      <!-- form - start -->
      <form @submit.prevent="sendMessages" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
        <div>
          <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">性*</label>
          <input
            v-model="first_name"
            name="first-name"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
          <p class="text-red-500">{{ errors.first_name }}</p>
        </div>

        <div>
          <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">名*</label>
          <input
            v-model="last_name"
            name="last-name"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
          <p class="text-red-500">{{ errors.last_name }}</p>
        </div>

        <div class="sm:col-span-2">
          <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">会社名</label>
          <input
            v-model="company"
            name="company"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス*</label>
          <input
            v-model="email"
            name="email"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
          <p class="text-red-500">{{ errors.email }}</p>
        </div>

        <div class="sm:col-span-2">
          <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">電話番号*</label>
          <input
            v-model="phone"
            name="subject"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
          <p class="text-red-500">{{ errors.phone }}</p>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">お問い合わせ詳細*</label>
          <textarea
            v-model="detail"
            name="message"
            class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          ></textarea>
          <p class="text-red-500">{{ errors.detail }}</p>
        </div>

        <div class="sm:col-span-2 flex justify-between items-center">
          <button
            type="submit"
            class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            送信
          </button>

          <span class="text-red-500 text-sm">*必須項目</span>
        </div>
      </form>
      <!-- form - end -->
    </div>
  </div>
</template>
