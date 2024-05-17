<template>
  <div>
    <h1>Blood Analysis</h1>
    <div>
      <Line :chart-data="datacollection" :options="chartOptions"></Line>
    </div>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
import { reactive, ref } from 'vue';

Chart.register(...registerables)

// Define the chart data
const datacollection = ref({
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Hematocrit',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: [0, 10, 15, 18, 20, 25, 30],
      fill: true,
      tension: 0.4
    }
  ]
})

// Define the chart options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || ''
          if (label) {
            label += ': '
          }
          label += context.parsed.y + '% while fasting'
          return label
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 40,
      ticks: {
        callback: function(value) {
          return value + '%'
        }
      }
    }
  }
})
</script>
