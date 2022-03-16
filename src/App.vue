<script setup>
import { useWindowSize } from '@/composables/use-window-size'

const { width, height } = useWindowSize()
</script>

<template>
  <main>
    <p>Window Width: {{ width }}</p>
    <p>Window Height: {{ height }}</p>
  </main>
</template>
