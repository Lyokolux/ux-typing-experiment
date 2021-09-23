import { firebaseApp } from '../config/firebase'
import { collection, doc, setDoc } from "firebase/firestore" 
import { getFirestore } from 'firebase/firestore/lite'
import { writable } from 'svelte/store'


function createApi() {
	const { subscribe, set, update } = writable(0)

    const db = getFirestore(firebaseApp)
    const experimentsRef = collection(db, 'typing-session')

    const storeIt = (payload) => setDoc(doc(experimentsRef, '20210922182934'), payload)

	return {
		subscribe,
        storeIt
	}
}

export const api = createApi()