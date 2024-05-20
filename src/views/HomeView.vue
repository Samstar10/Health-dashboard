<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import PatientList from '@/components/PatientList.vue';
import Consulted from '@/components/Consulted.vue';
import Notes from '@/components/Notes.vue';
import BloodCells from '@/components/BloodCells.vue';
import BloodAnalysis from '@/components/BloodAnalysis.vue';
import BodyTemp from '@/components/BodyTemp.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isSidebarVisible = ref(false);

const toggleSidebar = (e) => {
  // e.stopPropagation()
  isSidebarVisible.value = !isSidebarVisible.value
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.sidebar') && !e.target.closest('.navbar-toggle')) {
    isSidebarVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative lg:flex"> 
    <div class="lg:block lg:w-1/12 sidebar z-20"  :class="{'block': isSidebarVisible, 'hidden': !isSidebarVisible}">
      <Sidebar />
    </div>
    <main :class="['w-full lg:w-11/12 right-0 px-14 pb-10', isSidebarVisible ? 'w-11/12' : 'w-full']">
      <div class="navbar-toggle z-10">
        <Navbar @toggle-sidebar="toggleSidebar" />
      </div>
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
