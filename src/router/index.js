import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products-category",
    component: () => import("@/views/ProductCategory"),
  },
  {
    path: "/products/products-page/:productId",
    name: "products-page",
    component: () => import("@/views/ProductPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
