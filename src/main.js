// import './assets/main.css'

import { createApp, toRef } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { SecretPiniaPlugin } from './stores/plugin/SecretPiniaPlugin'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.message = 'hello world'

  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    // añade cualquier clave que crees al almacén
    store._customProperties.add('message')
  }
})

// esta seccion se ejecutara cuando se monte el pinia en la app
// para ver si hay algun error
pinia.use(({ store }) => {
  store.$state.hasError = false
  store.hasError = toRef(store.$state, 'hasError')
  console.log('This is the store', store.$id)
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    // añade cualquier clave que crees al almacén
    store._customProperties.add('message')
  }
})

app.use(pinia)
pinia.use(SecretPiniaPlugin)

app.use(createPinia())
app.use(router)

app.mount('#app')
