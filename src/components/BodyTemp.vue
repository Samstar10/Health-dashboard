<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useStore } from 'vuex';


const store = useStore();

const series = ref([36]); // Set the initial temperature value
const chartOptions = {
  chart: {
    type: 'radialBar',
    offsetY: -20,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        margin: 0,
        size: '70%',
        background: 'transparent',
      },
      track: {
        background: '#f0f0f0',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px',
        },
        value: {
          offsetY: 10,
          color: '#111',
          fontSize: '36px',
          show: true,
          formatter: function (val) {
            return val + '°C';
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#87D4F9'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Temperature'],
};

const temperature = computed(() => store.getters["getTemperature"]);

watch(temperature, (newValue, oldValue)=>{
  console.log(newValue);
  if(newValue.length > 0) {
    series.value = [newValue[0].celsius.toFixed(2)];
  }
})

onMounted(async() => {

  await store.dispatch('setTemperature')
  // const temperature = store.getters.getTemperature
  // if (temperature) {
  //   series.value = [temperature[0].celsius.toFixed(2)];
  // }
})
</script>

<template>
  <div>
    <h1 class="mb-6 font-semibold">Body Temperature</h1>
    <div class="chart-container border-2 p-2 border-gray-100 rounded-xl">
      <VueApexCharts type="radialBar" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  border-radius: 20px; /* Adjust the value as needed */
  overflow: hidden;   /* Ensures the content respects the border radius */
  background: white;  /* Optional: set a background color to see the effect */
  /* padding: 20px;      Optional: add some padding */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>