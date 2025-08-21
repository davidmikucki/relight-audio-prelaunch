import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin({
  name: 'motion',
  parallel: true,
  setup(nuxtApp) {
    nuxtApp.vueApp.use(MotionPlugin)
  }
})
