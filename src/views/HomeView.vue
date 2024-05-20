<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import PatientList from '@/components/PatientList.vue';
import Consulted from '@/components/Consulted.vue';
import Notes from '@/components/Notes.vue';
import BloodCells from '@/components/BloodCells.vue';
import BloodAnalysis from '@/components/BloodAnalysis.vue';
import BodyTemp from '@/components/BodyTemp.vue';
import { ref } from 'vue';

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}
</script>

<template>
  <div class="flex"> 
    <div class="hidden lg:block lg:w-1/12 sticky"  v-if="isSidebarVisible">
      <Sidebar />
    </div>
    <main :class="['w-full lg:w-11/12 right-0 px-14 pb-10', isSidebarVisible ? 'w-11/12' : 'w-full']">
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
