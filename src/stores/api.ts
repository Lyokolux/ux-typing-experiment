import { writable } from 'svelte/store'
import { initFirestore } from '../firestore'
import {
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  DocumentReference
} from 'firebase/firestore'
import { USER_COLLECTION_NAME } from '../const'
import type { User, Experiment } from '../types'

const createApi = () => {
  const { db } = initFirestore()
  const dbCollection = collection(db, USER_COLLECTION_NAME)

  const { set, subscribe } = writable<DocumentReference>()

  const addUserRequest = async (user: User) => {
    set(await addDoc(dbCollection, user))
  }

  /**
   * @param userDoc provided in the stores
   */
  const addExperimentRequest = async (userDoc: DocumentReference, experiment: Experiment) => (
    updateDoc(userDoc, {
      experiments: arrayUnion(experiment)
    })
  )

  return {
    set,
    subscribe,
    addUserRequest,
    addExperimentRequest
  }
}

export const api = createApi()
