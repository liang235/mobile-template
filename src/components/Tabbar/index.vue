<script setup>
defineOptions({
	name: 'Tabbar',
})

const active = ref('home')
</script>

<template>
	<van-tabbar v-model="active" route>
		<van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
		<van-tabbar-item name="qa" to="/qa" icon="search">问答</van-tabbar-item>
		<van-tabbar-item name="video" to="/video" icon="video-o">视频</van-tabbar-item>
		<van-tabbar-item name="my" to="/my" icon="contact-o">我的</van-tabbar-item>
	</van-tabbar>
</template>

<style lang="scss" scoped></style>
