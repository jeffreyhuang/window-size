<script setup>
defineProps({
  size: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="text-slate-800 font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
    {{ size }}
  </div>
</template>
