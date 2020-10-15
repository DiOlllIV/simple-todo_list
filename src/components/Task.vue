<template>
  <li>
    <div v-bind:class="{done: task.done}">
      <strong>{{ index + 1 }}</strong>
      <input type="checkbox"
        v-on:change="task.done = !task.done"
      >
      <span contenteditable="true">
        {{ task.text }}
      </span>
    </div>
    <button class="button"
      v-on:click="$emit('remove-task', task.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: .5rem 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  strong {
    margin-right: 18px;
  }

  .button {
    font-size: 20px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(97, 87, 87, 0);
    border-radius: 50%;
    outline: none;
    border-color: rgb(247, 247, 247);
  }

  input {
    margin-right: 1rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>
