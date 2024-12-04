<template>
  <div class="tabs-container">
    <header>
      <nav>
        <router-link to="/tabs/tab1">Tab 1</router-link>
        <router-link to="/tabs/tab2">Tab 2</router-link>
        <router-link to="/tabs/tab3">Tab 3</router-link>
      </nav>
      <button @click="logout">Logout</button>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  console.log('User logged out')
  router.push('/')
}
</script>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-header-bg);
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: var(--color-link);
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: var(--color-link-hover);
}

button {
  padding: 0.6rem 1.2rem;
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
</style>
