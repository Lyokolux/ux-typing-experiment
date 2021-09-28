import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from './firestoreConfig'

export const initFirestore = () => {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    app,
    db
  }
}
