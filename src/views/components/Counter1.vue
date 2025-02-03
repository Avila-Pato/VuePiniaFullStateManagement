<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCounterStore } from '../../stores/counter'
import Counter2 from './Counter2.vue'
const counter = useCounterStore()

function icrementCounter() {
  counter.increment()
}
function DecrementCounter() {
  counter.decrement()
}

const props = defineProps(['count'])
</script>

<template>
  <div>
    <h1>This is the counter 1</h1>
    <p>Counter: {{ counter.count }}</p>
    <p>This is the value of count 1: -- {{ props.count }}</p>
    <button @click="icrementCounter">Increment</button>
    <button @click="DecrementCounter">Decrement</button>
    <div>
      <Counter2 :count="props.count" />
    </div>
  </div>
</template>
