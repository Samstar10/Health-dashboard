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
    <div class="bg-white p-5 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <slot></slot>
      <button @click="closeModal" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
</template>