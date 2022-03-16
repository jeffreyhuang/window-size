<script setup>
import SizeDisplay from '@/components/SizeDisplay.vue'
import { useWindowSize } from '@/composables/use-window-size'

const { width, height } = useWindowSize()
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-slate-200">
    <main>
      <div class="flex justify-center items-end flex-wrap">
        <SizeDisplay
          :size="width"
          title="Width"
        />

        <div class="mx-2 xl:mx-3 2xl:mx-4">
          <span class="text-slate-800 font-semibold text-lg xl:text-2xl">
            &times;
          </span>
        </div>

        <SizeDisplay
          :size="height"
          title="Height"
        />
      </div>

      <p class="text-slate-500 text-center mt-1.5 text-xs xl:text-sm">
        is your current window size
      </p>
    </main>
  </div>
</template>
