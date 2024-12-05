<template>
  <div class="chart-container">
    <h1>Sales Overview</h1>
    <!-- Use the Chartkick component with type 'line' for a line chart -->
    <div>
      <Chartkick type="line" :data="salesData" :options="chartOptions" />
    </div>
    <!-- <Chartkick type="line" :data="salesData" :options="chartOptions" /> -->
  </div>
</template>

<script setup>
import Chartkick from 'vue-chartkick' // Import the Chartkick component
import 'chart.js' // Ensure chart.js is correctly imported for chart types

// Sales data for the chart
const salesData = [
  ['Jan', 50],
  ['Feb', 70],
  ['Mar', 90],
  ['Apr', 110],
  ['May', 120],
  ['Jun', 130],
  ['Jul', 150],
  ['Aug', 160],
]

// Chart options for customizing the chart
const chartOptions = {
  title: 'Sales Over Time (2024)',
  xtitle: 'Month',
  ytitle: 'Sales ($)',
  colors: ['#ff6600'], // Orange color for the line chart
}
</script>

<style scoped>
.chart-container {
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-heading);
}

@media (max-width: 768px) {
  .chart-container {
    padding: 1rem;
  }
}
</style>
