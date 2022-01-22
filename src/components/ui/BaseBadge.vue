<template>
  <span class="badge" :class="type">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
};
</script>
<style  scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.milk {
  background-color: #ad8d34;
  color: white;
}

.eggs {
  background-color: #af3c4c;
  color: white;
}

.gluten {
  background-color: #2bb19f;
  color: white;
}
.soy {
  background-color: #449c41;
  color: white;
}
</style>