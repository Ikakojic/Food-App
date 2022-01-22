import { createStore } from "vuex";
import menuModules from "./modules/menu/index.js";
import contactModule from "./modules/contact/index.js";

const store = createStore({
  modules: {
    menu: menuModules,
    orders: contactModule,
  },
});
export default store;
