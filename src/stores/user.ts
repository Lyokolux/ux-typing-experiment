import { writable } from 'svelte/store'

import { api } from './api'
import type { User, Experiment } from '../types'

const createUserStore = () => {
  const { subscribe, update, set } = writable<User>({} as User)

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
            ...(user.experiments || []),
            experience
          ]
        }
      })
      api.addExperimentRequest(experience)
    }
  }
}

export const user = createUserStore()
