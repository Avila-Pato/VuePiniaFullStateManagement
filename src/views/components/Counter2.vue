<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// Define props with validation
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
})

// Define emits for increment and decrement actions
const emit = defineEmits(['increment', 'decrement'])

// Increment and decrement functions
function incrementCounter() {
  emit('increment')
}

function decrementCounter() {
  emit('decrement')
}
</script>

<template>
  <div>
    <h1>This is the Counter 2</h1>
    <p>Counter (from props): {{ props.count }}</p>
    <button @click="incrementCounter">Increment</button>
    <button @click="decrementCounter">Decrement</button>
  </div>
</template>
