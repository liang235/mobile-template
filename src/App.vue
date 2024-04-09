<script setup>
import useAPi from '@/api/index'
import { onMounted } from 'vue'

onMounted(() => {
	useAPi.getMobileLoginUser().then((res) => {
		console.log(res)
	})
	useAPi.getVars().then((res) => {
		console.log(res)
	})
})
</script>

<template>
	<router-view />
</template>

<style scoped></style>
