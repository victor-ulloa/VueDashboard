<template>
  <div class="news-feed">
    <h1>Top Headlines</h1>
    <ul>
      <li v-for="article in articles" :key="article.url" class="news-item">
        <a :href="article.url" target="_blank" rel="noopener">
          <div class="image-container" v-if="article.urlToImage">
            <img :src="article.urlToImage" alt="Article Image" />
          </div>
          <div class="content">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const articles = ref([])

async function fetchNews() {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=5a1fdc72152c41d3955cd8712c6f957f',
    )
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    articles.value = data.articles
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

onMounted(() => {
  fetchNews()
})
</script>

<style scoped>
.news-feed {
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-item {
  display: flex;
  flex-direction: column; /* Ensures the image, title, and description are stacked vertically */
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-card-bg);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.news-item a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column; /* Ensure everything inside is vertically aligned */
  gap: 1rem;
}

.image-container {
  width: 100%;
  height: 200px; /* Adjust height for better image visibility */
  overflow: hidden;
  border-radius: 4px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column; /* Stack the title and description vertically */
  gap: 0.5rem;
}

.news-item h2 {
  font-size: 1.2rem;
  margin: 0;
}

.news-item p {
  font-size: 1rem;
  color: var(--color-secondary-text);
  margin: 0;
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
  .news-item {
    gap: 1rem;
  }

  .image-container {
    height: 150px; /* Adjust height for smaller devices */
  }

  .news-item h2 {
    font-size: 1.1rem;
  }

  .news-item p {
    font-size: 1rem;
  }
}
</style>
