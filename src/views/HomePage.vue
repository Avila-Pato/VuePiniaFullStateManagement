<template>
  <div>
    <h1>HomePage</h1>
    <p>Counter: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <p>Triple: {{ counter.tripleCount }}</p>
    <button @click="icrementCounter">Increment</button>
    <button @click="DecrementCounter">Decrement</button>

    <div v-for="post in postStore.posts" :key="post.id">
      <p>
        <strong>{{ post.name }}</strong> -
        <a :href="post.url" target="_blank">{{ post.url }}</a>
      </p>
    </div>
  </div>

  <br />
  <br />
  <br />
  <br />
  <div>
    <h1>This is the Counter1 from View</h1>
    <Counter1 />
    <!-- <button @click="useCounterStore.increment">Increment</button>
    <button @click="useCounterStore.decrement">Decrement</button> -->
  </div>
</template>

<script setup>
import { onMounted, provide } from 'vue'
import { useCounterStore } from '../stores/counter'
import { usePostStore2 } from '../stores/post2'
import Counter1 from '../views/components/Counter1.vue'

const counter = useCounterStore()
const postStore = usePostStore2()

provide('useCounterStore', counter)

function icrementCounter() {
  counter.increment()
}
function DecrementCounter() {
  counter.decrement()
}

onMounted(() => {
  postStore.fetchPostData()
})
</script>
