<script setup>
const props = defineProps({
	isVisible: {
		type: Boolean,
		required: true
	}
})

const emits = defineEmits(['close'])

const closeModal = () => {
	emits('close')
}
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-5 rounded-lg shadow-lg w-1/2">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold mb-4">How are you feeling today?</h2>
        <span class="material-symbols-outlined cursor-pointer" @click="closeModal">close</span>
      </div>
      <slot></slot>
      <button @click="closeModal" class="mt-4 bg-pink-400 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
</template>