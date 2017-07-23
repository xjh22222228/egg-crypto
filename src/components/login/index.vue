<template>
	<transition enter-active-class="animated fadeIn" appear>
		<section class="login">
			<el-correct :show="success">登录成功</el-correct>
			<el-layer-top :show="show">Username cannot be empty</el-layer-top>
			<div class="login-box">
				<div class="login-input">
					<input 
						type="text" 
						placeholder="Username"
						maxlength="8"
						autocomplete="off"
						v-model.trim="username"
						@keyup.enter="submit">
				</div>
				<div class="login-input">
					<input 
						type="text" 
						placeholder="password"
						maxlength="30"
						autocomplete="off"
						v-model.trim="password"
						@keyup.enter="submit">
				</div>
				<div class="submit" @click="submit">Login</div>
			</div>
		</section>
	</transition>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			username: '',
			password: '',
			success: false,
			show: false,
		}
	},
	beforeRouteEnter (to, from, next) {
		// 判断是否有登录状态
		if( sessionStorage.self ) return next('/chat');
		next();
	},
	methods: {
		submit () {
			if( this.username == '' ) return this.warn();
			var now = new Date();
			var avatar = [
				'/static/images/avatar/avatar1.jpg',
				'/static/images/avatar/avatar2.jpg',
				'/static/images/avatar/avatar3.jpg',
				'/static/images/avatar/avatar4.jpg',
				'/static/images/avatar/avatar5.jpg',
				'/static/images/avatar/avatar6.jpg',
				'/static/images/avatar/avatar7.jpg',
				'/static/images/avatar/avatar8.jpg',
				'/static/images/avatar/avatar9.jpg',
			];
			this.$store.commit('login', {
				name: this.username,
				time: now.getTime(),
				avatar: avatar[Math.floor(Math.random() * avatar.length)],
				uid: now.getTime() + Math.floor(Math.random() * 99999),
			});
			this.success = true;
			setTimeout(() => {
				this.success = false;
				this.$router.push('/chat');
			}, 1333);
		},
		warn () {
			this.show = true;
			setTimeout(() => this.show = false, 1333);
		},
	}
}
</script>