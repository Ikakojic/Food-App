<template>
  <section><meal-filter @change-filter="setFilters"></meal-filter></section>
  <section>
    <div class="food">
      <i class="fas fa-pizza-slice"></i>
      <i class="fas fa-hamburger"></i>
      <i class="fas fa-pepper-hot"></i>
      <i class="fas fa-drumstick-bite"></i>
      <i class="fas fa-carrot"></i>
    </div>
    <base-card>
      <ul v-if="hasMeals">
        <meal-info
          v-for="meal in filteredMeals"
          :key="meal.id"
          :id="meal.id"
          :meal-name="meal.mealName"
          :ingredients="meal.ingredients"
          :price="meal.price"
          :allergens="meal.allergens"
        >
        </meal-info>
      </ul>

      <h4 v-else>Nothing here... :(</h4>
    </base-card>
  </section>
</template>

<script>
import MealInfo from "../../components/menu/MealInfo.vue";
import MealFilter from "../../components/menu/MealFilter.vue";

export default {
  components: {
    MealInfo,
    MealFilter,
  },
  data() {
    return {
      activeFilters: {
        milk: true,
        eggs: true,
        gluten: true,
        soy: true,
      },
    };
  },
  computed: {
    filteredMeals() {
      const meals = this.$store.getters["menu/menu"];
      return meals.filter((meals) => {
        if (this.activeFilters.milk && meals.allergens.includes("milk")) {
          return true;
        }
        if (this.activeFilters.eggs && meals.allergens.includes("eggs")) {
          return true;
        }
        if (this.activeFilters.gluten && meals.allergens.includes("gluten")) {
          return true;
        }
        if (this.activeFilters.soy && meals.allergens.includes("soy")) {
          return true;
        }
        return false;
      });
    },
    hasMeals() {
      return this.$store.getters["menu/hasMeals"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.food {
  display: flex;
  justify-content: center;
}

.food i {
  margin-right: 2rem;
  margin-left: 3rem;
  font-size: 2rem;
  color: #dba379;
  filter: drop-shadow(3px 4px 3px rgb(16, 42, 97));
}
</style>