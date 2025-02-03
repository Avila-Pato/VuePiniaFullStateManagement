<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps(['count'])
</script>

<template>
  <div>
    <h1>This is the counter 1</h1>
    {{ props.count }}
  </div>
</template>
