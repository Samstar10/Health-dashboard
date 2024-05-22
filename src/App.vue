<script setup>

import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(()=>{
      
  store.dispatch('setAccessToken', "eyJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3NvciI6IjEwMzM1OCIsImFjY2Vzc2luZyI6IjEwMzM1NyIsInByb3ZpZGVyIjoiMTAzMzU2IiwiZnVuY3Rpb24iOiJCYXNpY0F1dGhlbnRpY2F0aW9uIiwiaXNzIjoiJDJhJDEwJE8vcm5heS55TGxhTXp4MVFwU05kNWUuc25VaGovSHhHc1JTY2U1Q3ZhRC9oWklGSDQxVjdDIiwiaWF0IjoxNzE2Mzg0MjY5LCJleHAiOjE3MTY0MDIyNjl9.4gy-hvSy7f76oBHiobIiV3D7mL2naHj0xROJUXgNkaWprN3REmw8Ay-NWjq-67Ca7UjbFCBh_tyBaTueb4YgAg")

})


</script>

<template>

  <RouterView />
</template>

<style scoped>

</style>
