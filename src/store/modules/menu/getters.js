export default {
  menu(state) {
    return state.meals;
  },
  hasMeals(state) {
    return state.meals && state.meals.length > 0;
  },
};
