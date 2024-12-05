// src/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDiv-iKmQA_qcYVG7M0q09jBZgBWU9zpGs',
  authDomain: 'vuedashboard-a5506.firebaseapp.com',
  projectId: 'vuedashboard-a5506',
  storageBucket: 'vuedashboard-a5506.appspot.com',
  messagingSenderId: '380939807065',
  appId: '1:380939807065:web:8e203098ca3392c034c448',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
