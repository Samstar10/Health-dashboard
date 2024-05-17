<script setup>

</script>

<template>
	<aside class=" w-1/12 sticky top-0">
		<div class="flex flex-col left-0 h-screen border-r-2 justify-between pb-5">
			<div>
				<div class="p-8">
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