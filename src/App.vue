<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>
  </div>
  <div>
    count : {{ count }} double : {{ double }}
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { useCounterStore } from './stores/counter2'
import { mapStores, mapState, mapActions } from 'pinia'
import { usePostStore } from './stores/post'
export default {
  data() {
    return {
      appName: 'My Vue App Leraning  pinia',
    }
  },
  computed: {
    ...mapStores(useCounterStore, usePostStore),
    ...mapState(useCounterStore, ['count', 'double']),
    ...mapState(usePostStore, ['posts']),
    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(usePostStore, ['fetchPostData']),

    incrementAgain() {
      this.increment()
    },
  },
  async mounted() {
    // this.increment()
    this.fetchPostData()
  },
}
</script>
