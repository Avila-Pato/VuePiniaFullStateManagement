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
</template>

<script setup>
import { onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'
import { usePostStore2 } from '../stores/post2'
const counter = useCounterStore()
const postStore = usePostStore2()

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
