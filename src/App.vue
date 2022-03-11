<script setup>
import { ref, onBeforeUnmount } from 'vue'

// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
const width = ref(0)
const height = ref(0)

function reportWindowSize() {
  width.value = window.innerWidth
  height.value = window.innerHeight
}

reportWindowSize()

window.addEventListener('resize', reportWindowSize)

onBeforeUnmount(() => {
  window.removeEventListener('resize', reportWindowSize)
})
</script>

<template>
  <main>
    <p>Window Width: {{ width }}</p>
    <p>Window Height: {{ height }}</p>
  </main>
</template>
