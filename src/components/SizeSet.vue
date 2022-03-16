<script setup>
import SizeNumber from '@/components/SizeNumber.vue'

defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="text-slate-500 text-base xl:text-lg">
    {{ title }}
  </div>

  <div class="flex justify-start items-end flex-wrap mt-0.5">
    <SizeNumber :size="width" />

    <div class="mx-2 xl:mx-3 2xl:mx-4">
      <span class="text-slate-800 font-semibold text-lg xl:text-2xl">
        &times;
      </span>
    </div>

    <SizeNumber :size="height" />
  </div>
</template>
