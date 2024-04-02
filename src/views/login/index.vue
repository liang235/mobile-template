<!-- <script setup>
defineOptions({
	name: 'login',
})
</script> -->

<script lang="jsx">
export default defineComponent({
	name: 'JsxComp',
	setup() {
		return () => (
			<div class="test">
				这是一个用
				<span>JSX</span>
				编写的SFC组件。
			</div>
		)
	},
})
</script>

<template>login</template>

<style lang="scss" scoped></style>
