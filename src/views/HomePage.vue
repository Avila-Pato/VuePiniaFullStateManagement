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

  <div>
    <h1>Count using ToRef: {{ countVal.count }}</h1>
  </div>

  <br />
  <br />
  <h1 class="text-3xl font-bold bg-blue-500 underline">Hello world!</h1>
  <br />
  <br />
  <div>
    <h1>This is the Counter1 from View</h1>
    <Counter1 />
    <!-- <button @click="useCounterStore.increment">Increment</button>
    <button @click="useCounterStore.decrement">Decrement</button> -->
  </div>

  <div>
    <h1>This is the user Input to change the name by using ReactiveToRefs</h1>
    <button @click="updateUserName">{{ name }}</button>
    <button @click="updateUserName">{{ gender }}</button>
  </div>
</template>

<script setup>
import { onMounted, provide, reactive, toRef, toRefs } from 'vue'
import { useCounterStore } from '../stores/counter'
import { usePostStore2 } from '../stores/post2'
import Counter1 from '../views/components/Counter1.vue'

const counter = useCounterStore()
const postStore = usePostStore2()

const countVal = toRef(counter, 'count')
console.log(counter.secret)

provide('useCounterStore', counter)

const userInput = reactive({
  name: 'John Doe',
  gender: 'male',
})
const { name, gender } = toRefs(userInput)

function updateUserName() {
  userInput.name = 'maria jones'
  userInput.gender = 'female'
}

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
