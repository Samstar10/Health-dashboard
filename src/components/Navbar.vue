<script setup>

</script>

<template>
  <div class="border-b-2 w-full py-6 lg:py-10 flex justify-between items-center">
	    <div class="lg:hidden text-gray-400 mr-2">
			<span class="material-symbols-outlined">
				menu
			</span>
		</div>
		<div>
			<div class="flex gap-2 mb-3">
				<h1 class="text-lg sm:text-xl lg:text-3xl font-light">Good Morning <span class="text-lg sm:text-xl lg:text-3xl font-semibold">Dr. Everly</span></h1>
			</div>
			<p class="text-xs lg:text-base font-normal text-gray-300">Happiness is the highest form of health</p>
		</div>
		<div class="flex w-1/2 lg:w-1/4 justify-end gap-2 lg:justify-between">
			<div class="hidden md:flex gap-2 lg:gap-5 justify-center items-center">
				<span class="material-symbols-outlined">
					search
				</span>
				<span class="material-symbols-outlined">
					notifications
				</span>
			</div>
			<div class="flex justify-center items-center gap-2 border-2 border-gray-100 rounded-xl p-2">
				<img src="../assets/images/smmuli.jpeg" alt="Photo of Dr Everly" class="rounded-full h-8">
				<span class="hidden md:block font-semibold text-xs lg:text-base">Dr. Everly</span>
				<span class="material-symbols-outlined text-gray-400">
					keyboard_arrow_down
				</span>
			</div>
		</div>
   </div>
</template>