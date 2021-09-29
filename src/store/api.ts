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

function createApi() {
  const { db } = initFirestore()
  const dbCollection = collection(db, USER_COLLECTION_NAME)

  const currentUserDoc = writable<DocumentReference>()

  const addUserRequest = async (user: User) => {
    currentUserDoc.set(await addDoc(dbCollection, user))
  }

  /**
   * @param currentUserDoc provided in the store
   */
  // TODO: type experiment when the type will be defined
  const addExperimentRequest = async (userDoc: DocumentReference, experiment: Experiment) => (
    updateDoc(userDoc, {
      experiments: arrayUnion(experiment)
    })
  )

  return {
    currentUserDoc,
    addUserRequest,
    addExperimentRequest
  }
}

export const api = createApi()
