<script setup>
</script>

<template>
	<aside class="w-3/12 lg:w-full top-0 absolute lg:sticky transition-transform duration-300 bg-white shadow-lg">
		<div class="flex">
			<div class="w-1/4 h-screen bg-violet-200 nav-side"></div>
			<div class="flex flex-col left-0 h-screen border-r-2 justify-between pb-5">
				<div>
					<div class="p-3 md:p-4 lg:p-8 mb-10">
						<RouterLink
							:to="{name: 'home'}">
							<img src="../assets/images/home icon.png" alt="">
						</RouterLink>
					</div>
					<div class="flex flex-col gap-5 items-center">
						<RouterLink
							active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
							:to="{name: 'home'}">
							<span class="material-symbols-outlined text-gray-400">
								pie_chart
							</span>
						</RouterLink>
						<RouterLink
							active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
							:to="{name: 'analytics'}">
							<span class="material-symbols-outlined text-gray-400">
								trending_up
							</span>
						</RouterLink>
						<RouterLink
							active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
							:to="{name: 'profile'}">
							<span class="material-symbols-outlined text-gray-400">
								person
							</span>
						</RouterLink>
						<RouterLink
							active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
							:to="{name: 'settings'}">
							<span class="material-symbols-outlined text-gray-400">
								settings
							</span>
						</RouterLink>
						<RouterLink
							active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
							:to="{name: 'messages'}">
							<span class="material-symbols-outlined text-gray-400">
								mail
							</span>
						</RouterLink>
					</div>
				</div>
				<div class="flex flex-col gap-5 items-center">
					<RouterLink
						active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
						:to="{name: 'exceptions'}">
						<span class="material-symbols-outlined text-gray-400">
							error
						</span>
					</RouterLink>
					<RouterLink
						active-class="bg-violet-200 w-full flex justify-end rounded-r-2xl p-2 mr-10"
						:to="{name: 'input'}">
						<span class="material-symbols-outlined text-gray-400">
							place_item
						</span>
					</RouterLink>
				</div>
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