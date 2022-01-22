import { createRouter, createWebHistory } from "vue-router";
import MealDetail from "./pages/menu/MealDetail.vue";
import MealsList from "./pages/menu/MealsList.vue";
import Contact from "./pages/contact/Contact.vue";

import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/menu",
    },
    {
      path: "/menu",
      component: MealsList,
    },
    {
      path: "/menu/:id",
      component: MealDetail,
      props: true,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
