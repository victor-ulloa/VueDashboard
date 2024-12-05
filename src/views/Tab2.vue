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
  flex-direction: row;
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
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.image-container {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 4px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  flex: 1;
}

.news-item h2 {
  font-size: 1rem;
  margin: 0 0 0.5rem;
}

.news-item p {
  font-size: 0.9rem;
  color: var(--color-secondary-text);
  margin: 0;
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
  .news-item {
    flex-direction: column; /* Stack image and text vertically */
    align-items: flex-start;
  }

  .image-container {
    width: 100%; /* Make image full width */
    height: 150px;
  }

  .content {
    text-align: left;
  }

  .news-item h2 {
    font-size: 1.1rem; /* Slightly larger text for readability */
    margin-bottom: 0.5rem;
  }

  .news-item p {
    font-size: 1rem; /* Adjust text size */
    margin-top: 0.5rem;
  }
}
</style>
