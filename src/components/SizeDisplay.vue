<script setup>
defineProps({
  size: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-end">
    <div class="text-slate-500 text-base xl:text-lg">
      {{ title }}
    </div>

    <div class="text-slate-800 font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
      {{ size }}
    </div>
  </div>
</template>
