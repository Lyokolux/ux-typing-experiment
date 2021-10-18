import { get, writable } from 'svelte/store'
import { initFirestore } from '../firestore'
import {
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  DocumentReference,
  getDocs
} from 'firebase/firestore'
import { USER_COLLECTION_NAME } from '../const'

import type { Event } from '../components/AlphanumericInput/utils'
import type { User, Experiment } from '../types'

interface FilteredExperiment extends Omit<Experiment, 'events'> {
  events: Omit<Event, 'date' | 'value'>[]
}
export interface FirestoreStoredUser extends Omit<User, 'experiments'> {
  experiments?: FilteredExperiment[]
}

const createApi = () => {
  const { db } = initFirestore()
  const dbCollection = collection(db, USER_COLLECTION_NAME)

  const userDoc = writable<DocumentReference>()

  const getAllUsers = async (): Promise<FirestoreStoredUser[]> => {
    const docs = await getDocs(dbCollection)
    const users: FirestoreStoredUser[] = []

    docs.forEach(doc => {
      users.push(doc.data() as FirestoreStoredUser)
    })

    return users
  }

  const addUserRequest = async (user: User) => {
    userDoc.set(await addDoc(dbCollection, user))
  }

  /**
   * @param userDoc provided in the stores
   */
  const addExperimentRequest = async (experiment: FilteredExperiment) => {
    updateDoc(get(userDoc), {
      experiments: arrayUnion(experiment)
    })
  }

  return {
    addUserRequest,
    addExperimentRequest,
    getAllUsers
  }
}

export const api = createApi()
