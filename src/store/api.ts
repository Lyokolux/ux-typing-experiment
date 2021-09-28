import { initFirestore } from '../firestore'
import {
  arrayUnion,
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  updateDoc,
  getDocs
} from 'firebase/firestore'
import { COLLECTION_NAMES } from '../const'

function createApi() {
  const { db } = initFirestore()
  const usersCollection = collection(db, COLLECTION_NAMES.USERS)

  const fetchTheMostRecentDocument = async <T>(inCollection: CollectionReference<T>): Promise<DocumentReference<T>> => {
    const { docs } = await getDocs(inCollection)
    if (docs.length > 0) {
      return docs[docs.length - 1].ref
    }
    return doc(inCollection, new Date().toString())
  }

  const addUserRequest = async (user) => {
    // TODO: type to UserInfo
    const document = await fetchTheMostRecentDocument<any>(usersCollection)
    return updateDoc(document, {
      users: arrayUnion(user)
    })
  }

  return {
    addUserRequest
  }
}

export const api = createApi()
