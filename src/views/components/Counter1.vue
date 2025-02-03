<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Counter2 from './Counter2.vue'

import { inject } from 'vue'

const useCounterStore = inject('useCounterStore')
</script>

<template>
  <div>
    <h1>This is the counter 1</h1>
    <p>Counter: {{ useCounterStore.count }}</p>
    <p>Double: {{ useCounterStore.doubleCount }}</p>
    <button @click="useCounterStore.increment">Increment</button>
    <button @click="useCounterStore.decrement">Decrement</button>
    <div>
      <Counter2 />
    </div>
  </div>
</template>
