<template>
  <base-card>
    <h2>Filter allergens</h2>
    <span class="filter-option">
      <input type="checkbox" id="milk" checked @change="setFilter" />
      <label for="milk">milk</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="eggs" checked @change="setFilter" />
      <label for="eggs">eggs</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="gluten" checked @change="setFilter" />
      <label for="gluten">gluten</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="soy" checked @change="setFilter" />
      <label for="soy">soy</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        milk: true,
        eggs: true,
        gluten: true,
        soy: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}


.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.5rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>