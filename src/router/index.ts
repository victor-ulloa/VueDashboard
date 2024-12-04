import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
  },
  {
    path: "/",
    redirect: "/auth",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;