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
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
  // Handle logout (e.g., Firebase sign out)
  console.log('User logged out');
  router.push('/');
}
</script>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--vt-c-black-soft);
  color: white;
}

nav {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-indigo);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>