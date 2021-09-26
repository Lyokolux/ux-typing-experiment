/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  VITE_FIRESTORE_API_KEY: string
  VITE_FIRESTORE_AUTH_DOMAIN: string
  VITE_FIRESTORE_DATABASE_URL: string
  VITE_FIRESTORE_PROJECT_ID: string
  VITE_FIRESTORE_STORAGE_BUCKET: string
  VITE_FIRESTORE_MESSAGING_SENDER_ID: string
  VITE_FIRESTORE_APP_ID: string
}
