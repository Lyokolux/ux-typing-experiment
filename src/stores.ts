import { writable } from 'svelte/store'
import type Swiper from 'swiper'

const createSwiperStore = () => {
  const { subscribe, update, set } = writable<Swiper | null>({} as Swiper)

  return {
    subscribe,
    update,
    set
  }
}

export const swiper = createSwiperStore()