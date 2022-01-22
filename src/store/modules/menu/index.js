import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      meals: [
        {
          id: "m1",
          mealName: "Pizza",
          ingredients: "cheese, tomato sauce, olives",

          allergens: ["milk"],
          price: 10,
        },
        {
          id: "m2",
          mealName: "Burger",
          ingredients: "beef letuce cheese onions buns mayo",
          allergens: ["eggs"],
          price: 15,
        },
        {
          id: "m3",
          mealName: "Spaghetti",
          ingredients: "tomatoes, mushrooms, basil",
          allergens: ["gluten"],
          price: 9,
        },
        {
          id: "m4",
          mealName: "Special Salad",
          ingredients: "chicken, letuce, paprika, spinach, soya sauce",
          allergens: ["soy"],
          price: 12,
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
