<script setup>
import { size } from '@/composables/use-size'
</script>

<template>
  <main>
    <p>Window Width: {{ size.width }}</p>
    <p>Window Height: {{ size.height }}</p>
  </main>
</template>
