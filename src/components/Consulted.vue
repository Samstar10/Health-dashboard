<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import DiaryModal from './DiaryModal.vue';

const store = useStore();
const user = computed(() => store.getters.getUser)
const userProfile = computed(() => store.getters.getUserProfile)
const diaries = computed(() => store.getters.getDiaries)
const isModalVisible = ref(false)

const calculateAge = (dob) => {
	const today = new Date()
	const years = today.getFullYear() - dob.getFullYear()
	let months = today.getMonth() - dob.getMonth()

	return {
		years: years,
		months: months
	}
}

const dob = computed(() => new Date(userProfile.value.dateOfBirth.year, userProfile.value.dateOfBirth.month - 1, userProfile.value.dateOfBirth.day))
const age = computed(() => calculateAge(dob.value))


const openModal = () => {
	isModalVisible.value = true
}

const closeModal = () => {
	isModalVisible.value = false
}

onMounted(() => {
	
	store.dispatch('setUser')
	store.dispatch('setUserProfile')
	store.dispatch('setDiaries')
})
</script>

<template>
    <div>
			<h1 class="font-semibold mb-10">Consulted</h1>
			<div class="border-2 border-gray-100 p-5 rounded-2xl">
				<div class="flex justify-between mb-5">
					<div class="flex items-center gap-2">
						<img src="../assets/images/smmuli.jpeg" alt="" class="rounded-full h-14">
						<div>
							<p class="font-semibold">{{ user ? user.loggedInUser.firstName : '' }} {{ user ? user.loggedInUser.lastName : '' }}</p>
							<p class="text-xs xl:text-sm text-gray-300">{{ userProfile ? userProfile.gender.value : '' }} - {{ userProfile ? `${age.years} Years` : '' }} {{ userProfile ? `${age.months} Months` : '' }}</p>
						</div>
					</div>
					<span class="material-symbols-outlined cursor-pointer" @click="openModal">
						add
					</span>
				</div>
				<div v-if="diaries.length > 0" class="flex justify-between mb-3">
					<div v-for="diary in diaries">
						<span class="material-symbols-outlined">
							{{ diary.symptoms }}
						</span>
						<p class="text-xs font-medium">Fever</p>
					</div>
					<!-- <div>
						<span class="material-symbols-outlined">
							sick
						</span>
						<p class="text-xs font-medium">Chest Pain</p>
					</div>
					<div>
						<span class="material-symbols-outlined">
							sick
						</span>
						<p class="text-xs font-medium">Infection</p>
					</div>
					<div>
						<span class="material-symbols-outlined">
							sick
						</span>
						<p class="text-xs font-medium">Dry Eyes</p>
					</div> -->
				</div>
				<div v-else>
					<p class="text-gray-300 text-sm text-center">No records found</p>
				</div>
				<div class="border-b-2 border-gray-100 mb-8"></div>
				<div class="flex justify-between w-full mb-5" v-for="diary in diaries" v-if="diaries.length > 0">
					<p class="font-semibold text-xs">{{ diary.name }}</p>
					<p class="font-normal text-xs text-gray-300 w-8/12">{{ diary.description }}</p>
				</div>
				<div v-else class="flex justify-center items-center">
					<button class="bg-violet-600 rounded-xl p-2 text-white text-xs xl:text-sm" @click="openModal">Update Diary</button>
				</div>
				<!-- <div class="flex justify-between w-full">
					<span class="font-semibold text-black">Dr Kimberly</span> on Mount Hospital on 29 June 2021 <span class="text-violet-400 font-semibold">Prescription #2J983KTO</span>
					<p class="font-semibold text-xs">Observation</p>
					<p class="font-normal text-xs text-gray-300 w-8/12">Three sickle cell patients were sustained at normal haemoglobin levels</p>
				</div> -->
			</div>

			<DiaryModal :isVisible="isModalVisible" @close="closeModal">
				<form>
					<input type="text">
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<input type="text">
				</form>
			</DiaryModal>
		</div>
</template>