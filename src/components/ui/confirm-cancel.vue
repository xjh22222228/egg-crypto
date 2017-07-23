<template>
	<div class="confirm-cancel" v-show="show">
		<transition enter-active-class="animated fadeInDown">
			<div class="confirm-cancel-box" v-show="show">
				<div class="logout">
					<slot></slot>
				</div>
				<div class="bottom">
					<div @click="confirm">确定</div>
					<div @click="cancel">取消</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'confirm_cancel',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	},
	methods: {
		cancel () {
			this.$emit('update:show', false);
		},
		confirm () {
			this.$emit('update:show', false);
			this.$emit('confirm');
		}
	}
}
</script>