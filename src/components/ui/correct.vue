<template>
	<transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
		<div class="correct" v-show="show">
			<div class="correct-box">
				<div class="iconfont">&#xe62e;</div>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'correct',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	}
}
</script>