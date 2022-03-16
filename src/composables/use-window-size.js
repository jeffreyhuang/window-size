import { ref, onBeforeUnmount } from 'vue'

const width = ref(0)
const height = ref(0)

function getWindowSize() {
  width.value = window.innerWidth
  height.value = window.innerHeight
}

window.addEventListener('resize', getWindowSize)

onBeforeUnmount(() => {
  window.removeEventListener('resize', getWindowSize)
})

getWindowSize()

export const useWindowSize = () => {
  return { width, height }
}
