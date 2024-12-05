<template>
  <div class="tab1-container">
    <h1>Pokédex</h1>
    <div v-if="loading" class="loading">Loading Pokémon...</div>
    <div v-else class="pokemon-grid">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-card">
        <img :src="pokemon.image" :alt="pokemon.name" />
        <p>{{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pokemons = ref([])
const loading = ref(true)

async function fetchPokemons() {
  loading.value = true
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    const data = await response.json()

    // Map Pokémon details with their images
    pokemons.value = data.results.map((pokemon, index) => ({
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }))
  } catch (error) {
    console.error('Error fetching Pokémon:', error)
    alert('Failed to fetch Pokémon. Please try again later.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPokemons()
})
</script>

<style scoped>
.tab1-container {
  padding: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.loading {
  font-size: 1.2rem;
  color: var(--color-text);
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.pokemon-card {
  background-color: var(--color-card-bg);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
}

.pokemon-card p {
  font-size: 1rem;
  color: var(--color-text);
}

/* Mobile-first styles */
@media (min-width: 600px) {
  .pokemon-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .pokemon-card img {
    width: 100px;
    height: 100px;
  }
}
</style>
