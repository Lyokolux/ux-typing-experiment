import { writable } from 'svelte/store'

import { api } from './api'
import type { User, Experiment } from '../types'

const DEFAULT_USER: User = {
  sexe: undefined,
  age: undefined,
  anyExperience: undefined,
  isMobileDevice: false,
  experienceGrades: [],
  experiments: []
}

const createUserStore = () => {
  const { subscribe, update, set } = writable<User>(DEFAULT_USER)

  return {
    subscribe,
    update,
    set,
    store: (user: User): void => {
      set(user)
      api.addUserRequest(user)
    },
    addExperience: (experience: Experiment) => {
      update(user => {
        return {
          ...user,
          experiments: [
            ...user.experiments,
            experience
          ]
        }
      })
      api.addExperimentRequest(experience)
    }
  }
}

export const user = createUserStore()
