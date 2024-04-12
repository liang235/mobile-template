<script setup>
import useApi from '@/api/index'

onMounted(() => {
	useApi.getMobileLoginUser().then((res) => {
		console.log(res)
	})
	useApi.getVars().then((res) => {
		console.log(res)
	})
	useApi.getTopInfosAll().then((res) => {
		console.log(res)
	})
	useApi.getOA().then((res) => {
		console.log(res)
	})
})
</script>

<template>
	<router-view />
</template>

<style scoped></style>
