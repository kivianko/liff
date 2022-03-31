import { onMounted, computed, reactive, ref } from "vue";
import liff from "@line/liff";

export const useFetchLiff = () => {
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

  return { isInClient, userProfile };
};
