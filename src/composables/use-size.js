import { reactive, onBeforeUnmount } from 'vue'

export const size = reactive({
  width: 0,
  height: 0
})

function reportWindowSize() {
  size.width = window.innerWidth
  size.height = window.innerHeight
}

window.addEventListener('resize', reportWindowSize)

onBeforeUnmount(() => {
  window.removeEventListener('resize', reportWindowSize)
})

reportWindowSize()
