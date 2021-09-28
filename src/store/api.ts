import { initFirestore } from '../firestore'
import {
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  DocumentReference
} from 'firebase/firestore'
import { USER_COLLECTION_NAME } from '../const'
import { writable } from 'svelte/store'

function createApi() {
  const { db } = initFirestore()
  const dbCollection = collection(db, USER_COLLECTION_NAME)

  const currentUserDoc = writable<DocumentReference>()

  const addUserRequest = async (user) => {
    currentUserDoc.set(await addDoc(dbCollection, user))
  }

  /**
   * @param currentUserDoc provided in the store
   */
  const addExperimentRequest = async (userDoc, experiment) => (
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
