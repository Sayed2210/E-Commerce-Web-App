import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products-category",
    component: () => import("@/views/ProductCategory"),
  },
  {
    path: "/products/products-page/:productId",
    name: "products-page",
    component: () => import("@/views/ProductPage"),
  },
  {
    path: "/cart-page",
    name: "cart-page",
    component: () => import("@/views/CartPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
