<template>
	<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
		<div class="layer-top" v-show="show">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'layerTop',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	},
}
</script>