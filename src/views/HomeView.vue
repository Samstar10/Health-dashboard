<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import PatientList from '@/components/PatientList.vue';
import Consulted from '@/components/Consulted.vue';
import Notes from '@/components/Notes.vue';
import BloodCells from '@/components/BloodCells.vue';
import BloodAnalysis from '@/components/BloodAnalysis.vue';
import BodyTemp from '@/components/BodyTemp.vue';
import { provide, ref } from 'vue';

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
  console.log('Sidebar Visibility: ',isSidebarVisible.value)
}

provide('isSidebarVisible', isSidebarVisible)
</script>

<template>
  <div class="relative lg:flex lg:flex-row"> 
    <div class="sticky"  v-if="isSidebarVisible">
      <Sidebar />
    </div>
    <main :class="['w-full transition-all duration-300 ease-in-out px-10 lg:ml-64', isSidebarVisible ? 'ml-64' : '']">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <div class="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10">
        <PatientList />
        <Consulted />
        <Notes />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <BloodAnalysis />
        <BloodCells />
        <BodyTemp />
      </div>
    </main>
  </div>
</template>
