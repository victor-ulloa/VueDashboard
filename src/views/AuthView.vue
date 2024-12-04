<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const error = ref("");

const register = async () => {
  error.value = "";
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Registration successful!");
  } catch (err: any) {
    error.value = err.message;
  }
};

const login = async () => {
  error.value = "";
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Login successful!");
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>

<template>
  <div class="auth-container">
    <h1>Welcome to the App</h1>
    <form @submit.prevent="login" class="auth-form">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" class="button primary">Login</button>
    </form>
    <button @click="register" class="button secondary">Sign Up</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<style scoped>
/* Dark Purple Color Palette */
:root {
  --color-bg: #2a003d;
  --color-bg-secondary: #3a0057;
  --color-text: #ffffff;
  --color-primary: #7b2cbf;
  --color-primary-hover: #9d4edd;
  --color-secondary: #590d82;
  --color-error: #ff6b6b;
}

.auth-container {
  background-color: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

input {
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus {
  outline: none;
  border-color: var(--color-primary-hover);
  box-shadow: 0 0 5px var(--color-primary-hover);
}

.button {
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.button.primary {
  background-color: var(--color-primary);
  color: var(--color-text);
}

.button.primary:hover {
  background-color: var(--color-primary-hover);
}

.button.secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.button.secondary:hover {
  background-color: var(--color-primary);
}

.error {
  margin-top: 10px;
  color: var(--color-error);
  font-size: 0.9rem;
}
</style>