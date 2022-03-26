<template>
  <div v-if="isInClient">
    <h1>Welcome to Your Liff + Vue.js App</h1>
    <ul v-show="liffState.profile">
      <li v-for="(v, k) in liffState.profile" :key="k">
        <img v-if="k === 'pictureUrl'" :src="v" alt="line-profile-picture" />
        <span v-else>{{ `${k}: ${v}` }}</span>
      </li>
    </ul>
  </div>
  <!-- <div v-else-if="isInClient === 'NOT_INITIALIZED'">Loading...</div> -->
  <div v-else-if="isInClient === false">Please open in LIFF browser!!</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import liff from "@line/liff";

type LiffState = {
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
  };
};

export default defineComponent({
  setup() {
    const isInClient = ref<boolean | "NOT_INITIALIZED">("NOT_INITIALIZED");
    const liffState = reactive<LiffState>({
      profile: undefined,
    });

    const getProfile = async () => {
      const profile = await liff.getProfile();
      liffState.profile = profile;
    };

    onMounted(async () => {
      // LIFFアプリの初期化
      await liff.init({ liffId: "1657003961-vMy8e8X2" });

      // LIFFブラウザで起動しているかの判定
      if (liff.isInClient()) {
        isInClient.value = true;
        getProfile();
        return;
      }

      isInClient.value = false;
    });

    return {
      liffState,
      isInClient,
    };
  },
});
</script>
