<template>
  <div class="auth-container">
    <h1 v-if="isLoginMode">Login</h1>
    <h1 v-else>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button type="submit">{{ isLoginMode ? 'Login' : 'Sign Up' }}</button>
    </form>
    <p>
      {{ isLoginMode ? "Don't have an account?" : 'Already have an account?' }}
      <button class="toggle-button" @click="toggleMode">
        {{ isLoginMode ? 'Sign Up' : 'Login' }}
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../configs/firebase' // Import the initialized auth instance
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const isLoginMode = ref(true)
const router = useRouter()

async function handleSubmit() {
  try {
    if (isLoginMode.value) {
      // Login with Firebase
      await signInWithEmailAndPassword(auth, email.value, password.value)
      console.log('Login successful')
      router.push('/tabs/tab1')
    } else {
      // Sign up with Firebase
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      console.log('Sign-up successful')
      router.push('/tabs/tab1')
    }
  } catch (error) {
    console.error('Error during authentication:', error.message)
    alert(error.message)
  }
}

function toggleMode() {
  isLoginMode.value = !isLoginMode.value
}
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
}

h1 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
}

input {
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-input-bg);
  color: var(--color-text);
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: var(--color-border-hover);
}

button {
  padding: 0.8rem;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: var(--color-button-hover);
}

p {
  margin-top: 1rem;
  color: var(--color-text);
}

.toggle-button {
  background: none;
  border: none;
  color: var(--color-link);
  cursor: pointer;
  font-weight: bold;
  padding: 0;
}

.toggle-button:hover {
  color: var(--color-link-hover);
}
</style>
