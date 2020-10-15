<template>
  <div>
    <ul>
      <Task
        v-for="(task, index) of todos"
        :key="task.id"
        :task="task"
        :index="index"
        v-on:remove-task="removeTask"
      />
    </ul>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
  props: ['todos'],
  components: {
    Task,
  },
  methods: {
    removeTask(id) {
      this.$emit('remove-task', id);
    },
  },
};
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
