import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePostStore2 = defineStore('posts2', () => {
  const posts = ref([])
  const sharedPost = ref({})
  const countPost = computed(() => posts.value.length)

  function sharePost(id) {
    const post = this.posts.find((post) => post.id === id)
    if (post) {
      this.sharedPost = post
      console.log('Shared Post:', this.sharedPost)
    } else {
      console.error('No se encontró ningún Pokémon con el ID:', id)
    }
  }
  async function fetchPostData() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      const data = await response.json()

      // Agregar un ID a cada Pokémon extrayéndolo del URL
      this.posts = data.results.map((post, index) => ({
        ...post,
        id: index + 1, // Opcional: Usar el índice como ID
        urlId: parseInt(post.url.split('/').filter(Boolean).pop(), 10), // Extraer el ID del URL
      }))

      console.log(this.posts)
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)
    }
  }
  return {
    posts,
    sharePost,
    sharedPost,
    countPost,
    fetchPostData,
  }
})
