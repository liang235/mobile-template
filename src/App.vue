<script setup>
import useAPi from '@/api/index'

onMounted(() => {
	useAPi.getMobileLoginUser().then((res) => {
		console.log(res)
	})
	useAPi.getVars().then((res) => {
		console.log(res)
	})
	useAPi.getTopInfosAll().then((res) => {
		console.log(res)
	})
})
</script>

<template>
	<router-view />
</template>

<style scoped></style>
