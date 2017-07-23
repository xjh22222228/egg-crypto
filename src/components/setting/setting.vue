<template>
	<transition enter-active-class="animated slideInRight">
		<div class="setting" @touchmove.prevent>
			<el-confirm-cancel :show.sync="show" @confirm="confirm">确定退出吗？</el-confirm-cancel>
			
			<el-header>设置</el-header>
			<!-- 按钮 begin -->
			<div class="setting-parent">
				<router-link to="/chat/about" class="about-author" tag="div">关于作者</router-link>
				<div class="exit" @click="exit">退出</div>
			</div>
			<!-- 按钮 end -->
		</div>
	</transition>
</template>


<script>
export default {
	name: 'setting',
	data () {
		return {
			show: false,
		}
	},
	methods: {
		exit () {
			this.show = true;
		},
		confirm () {
			sessionStorage.removeItem('self');
			window.location.reload();
		},
	},
}
</script>







