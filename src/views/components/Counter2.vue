<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from 'vue'

const useCounterStore = inject('useCounterStore')
</script>

<template>
  <div>
    <h1>This is the Counter 2</h1>
    <p>Counter: {{ useCounterStore.count }}</p>

    <button @click="useCounterStore.increment">Increment</button>
    <button @click="useCounterStore.decrement">Decrement</button>
  </div>
</template>
