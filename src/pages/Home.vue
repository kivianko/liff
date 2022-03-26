<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import liff from "@line/liff";

type UserProfile = {
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
  };
};

type Messages = {
  first_name: string;
  last_name: string;
  compony: string;
  email: string;
  phone: string;
  detail: string;
};

const isInClient = ref<boolean | "NOT_INITIALIZED">("NOT_INITIALIZED");
const userProfile = reactive<UserProfile>({
  profile: undefined,
});

const messages = reactive<Messages>({
  first_name: "",
  last_name: "",
  compony: "",
  email: "",
  phone: "",
  detail: "",
});

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

const sendMessages = async () => {
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
            messages.first_name +
            "\n" +
            messages.last_name +
            "\n" +
            messages.compony +
            "\n" +
            messages.email +
            "\n" +
            messages.phone +
            "\n" +
            messages.detail,
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
};
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
            v-model="messages.first_name"
            name="first-name"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div>
          <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">名*</label>
          <input
            v-model="messages.last_name"
            name="last-name"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">会社名</label>
          <input
            v-model="messages.compony"
            name="company"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス*</label>
          <input
            v-model="messages.email"
            name="email"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">電話番号*</label>
          <input
            v-model="messages.phone"
            name="subject"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">お問い合わせ詳細*</label>
          <textarea
            v-model="messages.detail"
            name="message"
            class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          ></textarea>
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
