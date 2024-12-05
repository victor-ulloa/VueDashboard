<template>
  <div class="weather-container">
    <h1>Weather Forecast</h1>
    <div class="weather-info">
      <div class="weather-city">
        <h2>Toronto</h2>
        <div v-if="torontoWeather">
          <p><strong>Temperature:</strong> {{ torontoWeather.temperature }}°C</p>
          <p><strong>Condition:</strong> {{ torontoWeather.weather_description }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
      <div class="weather-city">
        <h2>Barrie</h2>
        <div v-if="barrieWeather">
          <p><strong>Temperature:</strong> {{ barrieWeather.temperature }}°C</p>
          <p><strong>Condition:</strong> {{ barrieWeather.weather_description }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const torontoWeather = ref(null)
const barrieWeather = ref(null)

// Function to fetch weather data
async function fetchWeather() {
  try {
    const torontoResponse = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&current_weather=true&timezone=America%2FToronto',
    )
    const torontoData = await torontoResponse.json()
    torontoWeather.value = {
      temperature: torontoData.current_weather.temperature,
      weather_description: torontoData.current_weather.weathercode,
    }

    const barrieResponse = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=44.4&longitude=-79.7&current_weather=true&timezone=America%2FToronto',
    )
    const barrieData = await barrieResponse.json()
    barrieWeather.value = {
      temperature: barrieData.current_weather.temperature,
      weather_description: barrieData.current_weather.weathercode,
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

onMounted(() => {
  fetchWeather()
})
</script>

<style scoped>
.weather-container {
  padding: 1rem;
  background-color: var(--color-main-bg);
  color: var(--color-text);
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-heading);
}

.weather-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.weather-city {
  background-color: var(--color-card-bg);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-city h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.weather-city p {
  font-size: 1rem;
  color: var(--color-secondary-text);
}

.weather-city strong {
  font-weight: bold;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .weather-info {
    gap: 1.5rem;
  }

  .weather-city h2 {
    font-size: 1.1rem;
  }

  .weather-city p {
    font-size: 0.95rem;
  }
}
</style>
