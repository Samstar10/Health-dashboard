<script setup>
import { inject } from 'vue';

const isSidebarVisible = inject('isSidebarVisible')
</script>

<template>
	<aside :class="['w-64 h-screen fixed top-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out lg:translate-x-0', isSidebarVisible ? 'translate-x-0' : '-translate-x-full']">
		<div class="flex flex-col left-0 h-screen border-r-2 justify-between pb-5">
			<div>
				<div class="p-1 md:p-4 lg:p-8 mb-10">
					<img src="../assets/images/home icon.png" alt="">
				</div>
				<div class="flex flex-col gap-5 items-center">
					<span class="material-symbols-outlined text-gray-400">
						pie_chart
					</span>
					<span class="material-symbols-outlined text-gray-400">
						trending_up
					</span>
					<span class="material-symbols-outlined text-gray-400">
						person
					</span>
					<span class="material-symbols-outlined text-gray-400">
						settings
					</span>
					<span class="material-symbols-outlined text-gray-400">
						mail
					</span>
				</div>
			</div>
			<div class="flex flex-col gap-5 items-center">
				<span class="material-symbols-outlined text-gray-400">
					error
				</span>
				<span class="material-symbols-outlined text-gray-400">
					place_item
				</span>
			</div>
		</div>
	</aside>
</template>

<style scoped>
.sticky {
	position: sticky;
	top: 0;
	z-index: 1;
}
</style>