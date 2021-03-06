import { createRouter, createWebHistory } from "vue-router";
import Contact from "./pages/Contact.vue";
import Page1 from "./pages/Page1.vue";
import Page2 from "./pages/Page2.vue";

const routes = [
  { path: "/", name: "contact", component: Contact, meta: { title: "お問い合わせ" } },
  { path: "/Page1", name: "page1", component: Page1 },
  { path: "/Page2", name: "page2", component: Page2 },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // HTML5 History モード
  routes,
});

export default router;
