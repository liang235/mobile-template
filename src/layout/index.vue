<script setup>
defineOptions({
	name: 'layout',
})
</script>

<template>
	<NavBar />
	<div class="main-container">
		<router-view></router-view>
	</div>
	<Tabbar />
</template>

<style lang="scss" scoped></style>
