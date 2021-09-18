import { firebaseApp } from '~/config/firebase';
import { getFirestore } from 'firebase/firestore/lite'

export const db = getFirestore(firebaseApp)