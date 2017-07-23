<template>
	<transition enter-active-class="animated slideInRight">
		<section class="chat">
			<a href="/#/chat/setting" class="iconfont setting-btn">&#xe600;</a>
			<router-view></router-view>
			<el-tip :show.sync="show">请填写内容</el-tip>
			<el-confirm-cancel :show.sync="confirmShow" @confirm="delConfirm">确定清空信息吗？</el-confirm-cancel>
			<div class="chat-center">
				<div class="left">
					<div class="people">在线{{ users.length }}人</div>
					<div class="user-list" v-for="item of users" :key="item.uid">
						<img :src="item.avatar">
						<span>{{ item.name }}</span>
					</div>
				</div>

				<div class="right">
					<div class="message" ref="message">
						<template v-for="item of message">
							<!-- 信息 begin -->
							<div v-if="item.type == 'msg'" class="msg-list" :class="{active: item.uid == self.uid}" :key="item.msgId">
								<div class="time">
									<span>{{ item.time | formatDate }}</span>
								</div>
								<div class="name">
									<span class="username">{{ item.name }}</span>
									<span class="locality">{{ !item.locality.ret || item.locality.ret == -1 ? '未知地区' : `${item.locality.province}省${item.locality.city}市`}}</span>
								</div>
								<div class="msg-user">
									<img :src="item.avatar">
									<div class="msg-content">{{ item.content }}</div>
								</div>
							</div>
							<!-- 信息 end -->

							<div class="online" v-else-if="item.type == 'online'">
								<span>{{ item.name }}上线了</span>
							</div>
							<div class="online" v-else-if="item.type == 'offline'">
								<span>{{ item.name }}离线了</span>
							</div>
							<div class="online" v-else-if="item.type == 'error'">
								<span>服务器出错啦</span>
							</div>
							<div class="online" v-else-if="item.type == 'disconnect'">
								<span>服务器断开连接</span>
							</div>
							<div class="online" v-else-if="item.type == 'reconnect'">
								<span>连接服务器成功</span>
							</div>
							<div class="online" v-else-if="item.type == 'reconnecting'">
								<span>正在重新与服务器连接...</span>
							</div>
							<div class="online" v-else>
								<span>未知信息</span>
							</div>
						</template>
					</div>

					<div class="input">
						<div class="emoji-btn">
							<img src="/static/images/emoji/emoji.svg" @click="emojiShow = !emojiShow">
							<i class="iconfont garbage" @click="confirmShow = true">&#xe655;</i>
							<div class="emoji" v-show="emojiShow">
								<ul>
									<li v-for="(item, index) of emoji" v-html="item" @click="append(index)" :key="index"></li>
								</ul>
							</div>
						</div>
						<div class="input-text">
							<input placeholder="按 Enter发送" @keyup.enter="send" v-model.trim="content" maxlength="100">
							<div class="btn" @click="send">发送</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</transition>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'chat',
	data () {
		return {
			content: '',
			show: false,
			emojiShow: false,
			confirmShow: false,
			emoji: [
				' \ud83d\ude00 ',
				' \ud83d\ude2c ',
				' \ud83d\ude01 ',
				' \ud83d\ude02 ',
				' \ud83d\ude03 ',
				' \ud83d\ude04 ',
				' \ud83d\ude05 ',
				' \ud83d\ude06 ',
				' \ud83d\ude07 ',
				' \ud83d\ude08 ',
				' \ud83d\ude09 ',
				' \ud83d\ude0d ',
				' \ud83d\ude0e ',
				' \ud83d\ude21 ',
				' \ud83d\udc80 ',
				' \ud83d\ude2d ',
				' \ud83d\ude37 ',
				' \ud83e\udd17 ',
				' \ud83d\ude13 ',
				' \ud83d\ude2a ',
				' \ud83d\ude31 ',
				' \ud83d\ude32 ',
				' \ud83d\ude33 ',
				' \ud83d\ude34 ',
				' \ud83d\ude35 ',
				' \ud83d\ude36 ',
				' \ud83d\ude30 ',
			],
		}
	},
	beforeRouteEnter (to, from, next) {
		if( sessionStorage.self ) return next();
		next('/login');
	},
	computed: {
		...mapState(['message', 'title', 'users', 'self'])
	},
	methods: {
		...mapMutations(['delConfirm']),
		send () {
			if( this.content == '' ) return this.show = true;
			// 发送信息滚动条滚到最底
			setTimeout(() => this.$refs.message.scrollTop = 99999, 300);
			this.$store.dispatch('send', this.content);
			// 清空信息
			this.content = '';
		},
		append (index) {
			this.content += this.emoji[index];
			this.emojiShow = false;
		},
	},
	filters: {
		formatDate (val) {
			var now = new Date(val);
			var year = now.getFullYear();
			var month = now.getMonth() + 1;
			var date = now.getDate();
			var hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
			var minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
			var seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
			return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
		}
	},
}
</script>












