<script setup>
defineOptions({
	name: 'NavBar',
})

const route = useRoute()
const router = useRouter()

const onClickLeft = () => history.back()
const onClickRight = () => showToast('按钮')
</script>

<template>
	<van-nav-bar :title="route.meta.title" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
</template>

<style lang="scss" scoped></style>
