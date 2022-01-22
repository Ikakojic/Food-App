<template>
  <li>
    <h3>{{ mealName }}</h3>
    <h4>${{ price }}</h4>
    <p>{{ ingredients }}</p>
    <p>Allergens:</p>

    <div>
      <base-badge
        v-for="allergen in allergens"
        :key="allergen"
        :type="allergen"
        :title="allergen"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="mealDetailsLink">Details</base-button>
    </div>
  </li>
</template> 
<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["id", "mealName", "price", "ingredients", "allergens"],
  computed: {
    mName() {
      return this.mealName;
    },

    mealDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #e9c3c3;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>