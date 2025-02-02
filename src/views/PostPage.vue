<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>
  </div>
  <div>
    count : {{ count }} double : {{ double }}
    <button @click="increment">Increment</button>
    <br />
    <br />
    <ul>
      <li>
        <RouterLink to="/"> Post </RouterLink>
      </li>
      <li>
        <RouterLink to="/single-post"> Single Post </RouterLink>
      </li>
    </ul>
    <br />
    <br />
  </div>
  Count: {{ countPost }}
  <div v-if="posts && posts.length > 0">
    <div v-for="post in posts" :key="post.id">
      <p>{{ post.name }}</p>
      <button @click="sharePost(post.id)">Share</button>
    </div>
  </div>
  <div v-else>
    <p>Cargando Pokémon...</p>
  </div>

  <!-- Mostrar el Pokémon compartido -->
  <div v-if="sharedPost">
    <h2>Pokémon Compartido:</h2>
    <p>Nombre: {{ sharedPost.name }}</p>
    <p>
      URL: <a :href="sharedPost.url" target="_blank">{{ sharedPost.url }}</a>
    </p>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter2'
import { mapStores, mapState, mapActions } from 'pinia'
import { usePostStore } from '../stores/post'

export default {
  data() {
    return {
      appName: 'My Vue App Learning Pinia',
    }
  },
  computed: {
    ...mapStores(useCounterStore, usePostStore),
    ...mapState(useCounterStore, ['count', 'double']),
    ...mapState(usePostStore, ['posts', 'countPost', 'sharedPost']),
    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(usePostStore, ['fetchPostData', 'sharePost']),
  },
  async mounted() {
    await this.fetchPostData()
  },
}
</script>

<style>
button {
  cursor: pointer;
}
</style>
