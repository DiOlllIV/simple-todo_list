<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="input">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.input.trim()) {
        const newTask = {
          id: Date.now(),
          text: this.input,
          done: false,
        };
        this.$emit('add-task', newTask);
      }
      this.input = '';
    },
  },
};
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
  }

  input {
    height: 30px;
    width: 400px;
    border-radius: 10px;
  }

  button {
    width: 80px;
    border-radius: 10px;
    color: rgb(247, 247, 247);
    background-color: rgba(80, 140, 170, 0.6);
    border-color: rgb(247, 247, 247);
  }
</style>
