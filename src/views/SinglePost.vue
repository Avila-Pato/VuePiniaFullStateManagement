<template>
  <div class="about">
    <h1>{{ appName }}</h1>
    {{ sharedPost }}
  </div>
</template>

<script>
import { mapState, mapActions, mapStores } from 'pinia'
import { usePostStore } from '../stores/post'
export default {
  data() {
    return {
      appName: 'Single-posts',
    }
  },
  computed: {
    ...mapStores(usePostStore),
    ...mapState(usePostStore, ['posts', 'countPost', 'sharedPost']),
    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(usePostStore, ['fetchPostData', 'sharePost']),

    incrementAgain() {
      this.increment()
    },
  },
  async mounted() {
    // this.increment()
    // await this.fetchPostData()
  },
}
</script>
