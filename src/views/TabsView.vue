<template>
  <div class="tabs-container">
    <header>
      <nav>
        <router-link to="/tabs/tab1">Tab 1</router-link>
        <router-link to="/tabs/tab2">Tab 2</router-link>
        <router-link to="/tabs/tab3">Tab 3</router-link>
        <router-link to="/tabs/tab4">Tab 4</router-link>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 2rem; /* Increased spacing for better visibility */
  flex-grow: 1;
  justify-content: center;
}

nav a {
  color: var(--color-link);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  color: var(--color-link-hover);
  background-color: var(--color-button-bg);
}

button {
  padding: 0.6rem 1.2rem;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 1rem;
}

button:hover {
  background-color: var(--color-button-hover);
}

main {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--color-main-bg);
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }

  nav {
    flex-wrap: wrap;
    gap: 1rem; /* Reduced gap for smaller screens */
    justify-content: flex-start;
  }

  nav a {
    padding: 0.4rem 0.8rem; /* Adjust padding for mobile */
    font-size: 0.9rem; /* Slightly smaller text */
  }

  button {
    width: 100%; /* Full-width button for better tap experience */
    margin: 0.5rem 0;
    text-align: center;
  }
}
</style>
