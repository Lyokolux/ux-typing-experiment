import { writable } from 'svelte/store'
import type Swiper from 'swiper'
import type { User } from '../types'

const createSwiperStore = () => {
  const { subscribe, update, set } = writable<Swiper | null>({} as Swiper)

  return {
    subscribe,
    update,
    set
  }
}

interface Screen {
  width: number
  height: number
  device?: User['device']
}

const createScreenStore = () => {
  const { subscribe, update, set } = writable<Screen>({
    width: 0,
    height: 0,
    device: undefined
  })

  return {
    subscribe,
    update,
    set
  }
}

interface SwiperReactive {
  activeIndex: number
  slidesAmount: number
}
const createSwiperReactive = () => {
  const { subscribe, update, set } = writable<SwiperReactive>({} as SwiperReactive)

  return {
    subscribe,
    update,
    set
  }
}

export const swiper = createSwiperStore()
export const swiperReactive = createSwiperReactive()
export const screen = createScreenStore()
