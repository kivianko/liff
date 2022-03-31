<template>
  <div v-if="isInClient">
    <h1>Welcome to Your Liff + Vue.js App</h1>
    <ul v-show="userProfile.profile">
      <li v-for="(v, k) in userProfile.profile" :key="k">
        <img v-if="k === 'pictureUrl'" :src="v" alt="line-profile-picture" />
        <span v-else>{{ `${k}: ${v}` }}</span>
      </li>
    </ul>
  </div>
  <!-- <div v-else-if="isInClient === 'NOT_INITIALIZED'">Loading...</div> -->
  <div v-else-if="isInClient === false">Please open in LIFF browser!!</div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useFetchLiff } from "../composable/fetchLiff";

const { isInClient, userProfile } = useFetchLiff();
</script>
