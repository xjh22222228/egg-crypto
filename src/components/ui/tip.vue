<template>
	<div class="tip-container">
		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
			<div class="tip" v-show="show">
				<i class="iconfont">&#xe62c;</i>
				<div class="tip-box">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'tip',
	data () {
		return {
			status: true,
		}
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		}
	},
	watch: {
		show (val) {
			if( val && this.status )
			{
				this.status = false;
				setTimeout(() => {
					this.status = true;
					this.$emit('update:show', false);
				}, 1500);
			}
		}
	},
}
</script>

<style lang="scss" type="text/css">
@import "../../../static/scss/_variable.scss";

.tip-container {
	z-index: 999999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	@include center;
}

.tip {
	width: 300px;
	height: 40px;
	background: #fff;
	border-radius: 5px;
	margin-top: 30px;
	box-shadow: 1px 3px 5px #ccc, 0 0 5px #ccc;
	@include display(flex);

	i {
		width: 40px;
		font-size: 25px;
		font-weight: bold;
		color: #fff;
		background: rgb(247, 186, 43);
		@include center;
	}

	.tip-box {
		@include prefix(flex, 1);
		@include center(flex-start, center, start, center);
		text-indent: 10px;
		font-size: 16px;
	}
}
</style>








