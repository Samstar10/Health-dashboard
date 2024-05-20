<script setup>
</script>

<template>
  <div>
		<div class="flex justify-end items-center gap-6 mb-6">
			<p class="text-xs text-gray-300">RBC</p>
			<p class="text-xs text-violet-600 bg-violet-200 rounded-lg p-2">WBC</p>
			<p class="text-xs text-gray-300">Palates</p>
		</div>
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<div class="bg-blue-800 rounded-2xl p-4 flex gap-2 items-center">
				<span class="material-symbols-outlined bg-white text-blue-800 rounded-full p-4">
					hematology
				</span>
				<div class="flex flex-col">
					<span class="text-white font-normal">60 %</span>
					<span class="text-white font-light text-xs xl:text-sm">Neutrophils</span>
				</div>
			</div>
			<div class="bg-purple-400 rounded-2xl p-4 flex gap-2 items-center">
				<span class="material-symbols-outlined bg-white text-purple-400 rounded-full p-4">
					hematology
				</span>
				<div class="flex flex-col">
					<span class="text-white font-normal">29 %</span>
					<span class="text-white font-light text-xs xl:text-sm">Lymphocytes</span>
				</div>
			</div>
			<div class="bg-orange-300 rounded-2xl p-4 flex gap-2 items-center">
				<span class="material-symbols-outlined bg-white text-orange-400 rounded-full p-4">
					hematology
				</span>
				<div class="flex flex-col">
					<span class="text-white font-normal">5 %</span>
					<span class="text-white font-light text-xs xl:text-sm">Monocytes</span>
				</div>
			</div>
			<div class="bg-pink-400 rounded-2xl p-4 flex gap-2 items-center">
				<span class="material-symbols-outlined bg-white text-pink-400 rounded-full p-4">
					hematology
				</span>
				<div class="flex flex-col">
					<span class="text-white font-normal">1 %</span>
					<span class="text-white font-light text-xs xl:text-sm">Basophils</span>
				</div>
			</div>
		</div>
	</div>
</template>