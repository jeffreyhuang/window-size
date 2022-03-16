import { ref, onBeforeUnmount } from 'vue'

const viewportW = ref(0)
const viewportH = ref(0)
const windowW = ref(0)
const windowH = ref(0)
const screenW = ref(0)
const screenH = ref(0)
const dRatio = ref(0)

function getViewportSize() {
  viewportW.value = window.innerWidth
  viewportH.value = window.innerHeight
  windowW.value = window.outerWidth
  windowH.value = window.outerHeight
  screenW.value = window.screen.width
  screenH.value = window.screen.height
  dRatio.value = window.devicePixelRatio
}

window.addEventListener('resize', getViewportSize)

onBeforeUnmount(() => {
  window.removeEventListener('resize', getViewportSize)
})

getViewportSize()

export const useViewportSize = () => {
  return {
    viewportW,
    viewportH,
    windowW,
    windowH,
    screenW,
    screenH,
    dRatio
  }
}
