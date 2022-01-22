<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="message">Message/Order</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>

    <p class="errors" v-if="!formIsValid">Please enter a non-empty message!</p>
    <div class="actions">
      <base-button>Send Message or Order!</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      formIsValid: true,
    };
  },

  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.message === "") {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("orders/msgOrOrder", {
        msg: this.message,
      });
      this.$router.replace("/menu");
    },
  },
};
</script>



<style  scoped>
form {
  margin: 3rem;
  border: 1px solid rgb(238, 140, 140);
  border-radius: 12px;
  padding: 2rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #0c0c0c;
  background-color: #f3ecea;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>