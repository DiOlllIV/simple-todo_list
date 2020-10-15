<template>
  <div id="app">
    <h1>Todo app</h1>
    <AddTask @add-task="addTask" />
    <br />
    <TaskList v-bind:todos="todos" @remove-task="removeTask"/>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    removeTask(id) {
      this.$store.state.todos = this.$store.state.todos.filter((task) => (task.id !== id));
    },
    addTask(task) {
      this.$store.state.todos.push(task);
    },
  },
  components: {
    TaskList,
    AddTask,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
