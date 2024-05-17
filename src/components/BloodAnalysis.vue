<template>
  <div>
    <h1 class="mb-6 font-semibold">Blood Analysis</h1>
    <div class="p-6 border-2 border-gray-100 rounded-xl">
      <Line :data="datacollection" :options="chartOptions"></Line>
    </div>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
import { ref, onMounted } from 'vue';

Chart.register(...registerables)

// Define the chart data
const datacollection = ref({
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      backgroundColor: '#8f00ff40',
      borderColor: '#8f00ff',
      data: [0, 10, 15, 18, 20, 25, 30],
      fill: true,
      tension: 0.4
    }
  ]
})

console.log(datacollection.value)
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
    },
		legend: {
			display: false
		}
  },
  scales: {
		x: {
			grid: {
				display: false
			}
		},
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

console.log(chartOptions.value)
</script>
