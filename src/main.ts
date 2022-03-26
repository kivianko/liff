import { createApp } from "vue";
import liff from "@line/liff";
import App from "./App.vue";
import "./index.css";
import router from "./router"; // router.tsをインポート

// VueRouter が動き始める前にLIFFを初期化する
await liff.init({ liffId: import.meta.env.VITE_LIFF_ID });

const app = createApp(App);
app.use(router); // Vue Routerを使用する
app.mount("#app");
