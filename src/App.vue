<script setup>
import SizeSet from '@/components/SizeSet.vue'
import { useViewportSize } from '@/composables/use-viewport-size'

const { viewportW, viewportH, windowW, windowH, screenW, screenH } = useViewportSize()
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-slate-200">
    <main>
      <div class="mb-5">
        <SizeSet
          :width="viewportW"
          :height="viewportH"
          title="Viewport Size"
        />
      </div>

      <div class="mb-5">
        <SizeSet
          :width="windowW"
          :height="windowH"
          title="Window Size"
        />
      </div>

      <div>
        <SizeSet
          :width="screenW"
          :height="screenH"
          title="Screen Resolution"
        />
      </div>
    </main>
  </div>
</template>
