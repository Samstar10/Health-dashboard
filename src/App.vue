<script setup>

import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(()=>{
      
  store.dispatch('setAccessToken', "eyJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3NvciI6IjEwMzM1OCIsImFjY2Vzc2luZyI6IjEwMzM1NyIsInByb3ZpZGVyIjoiMTAzMzU2IiwiZnVuY3Rpb24iOiJCYXNpY0F1dGhlbnRpY2F0aW9uIiwiaXNzIjoiJDJhJDEwJDNQaXQ4U2QyWFE3ay9PUDN4RE1ndC40WmpNUGZFT3d6eWhLNTBRQTVWVTBmU2pBMDYwczBLIiwiaWF0IjoxNzE2MzU4ODU1LCJleHAiOjE3MTYzNzY4NTV9.C1SrilO7HaWtY1caR-R8vwPbVAG4d14sJdYmro31G-YXL8W4VH51kAMRClrg2RYzMmboy_ketOwRDEZKSjQZfQ")

})


</script>

<template>

  <RouterView />
</template>

<style scoped>

</style>
