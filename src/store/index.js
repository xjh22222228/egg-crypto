import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
	state: {
		isLogin: false, // 是否登录状态
		reconnecting: false, // 是否正在重新连接服务器
		self: {},		// 存放登录信息
		users: [],		// 存放所有在线用户
		title: document.title,	// 保存站点标题
		message: [		// 所有聊天信息
						/**
						 *   type 类型有：
						 *   msg = 信息
						 *   online = 用户上线
						 *   offline = 用户下线
						 *   error = 服务器出错
						 *   disconnect = 与服务器断开
						 *   reconnect = 重连成功
						 *   reconnecting = 正在重连
						 */
			{
				uid: 0,
				type: 'msg',
				name: 'Vue',
				avatar: '/static/images/avatar/vue.svg',
				content: '大家好, 我是Vue, 介绍我的朋友VueRouter、Vuex、WebSocket、Sass、Webpack、Animate.css、Node.js、Express、ES6.',
				time: Date.now(),
				msgId: 0,
				locality: {},
			},
			{
				uid: 1,
				type: 'msg',
				name: 'jQuery',
				avatar: '/static/images/avatar/jquery.svg',
				content: '我来凑个热闹',
				time: Date.now(),
				msgId: 1,
				locality: {},
			},
		],
	},
	mutations: {
		// 发送登录
		login (state, payload) {
			state.self = payload;  // 登录信息
			sessionStorage.self = JSON.stringify(payload);  // 保存登录状态
			socket.emit('login', payload);
		},
		// 追加信息
		addMsg (state, msg) {
			state.message.push(msg);
		},
		// 清空消息
		delConfirm (state) {
			state.message = [];
		},
	},
	actions: {
		// 初始化状态
		init ({state, commit}) {
			var isLogin = sessionStorage.self;
			state.isLogin = isLogin ? true : false;
			state.self = isLogin ? JSON.parse(isLogin) : state.self;
			isLogin && commit('login', JSON.parse(isLogin));

			socket.on('error', () => {
				commit('addMsg', {type: 'error'});
			});
			socket.on('disconnect', () => {
				commit('addMsg', {type: 'disconnect'});
			});
			socket.on('reconnect', () => {
				state.reconnecting = false;
				commit('login', state.self);
				commit('addMsg', {type: 'reconnect'});
			});
			socket.on('reconnecting', () => {
				if( !state.reconnecting )
				{
					state.reconnecting = true;
					commit('addMsg', {type: 'reconnecting'});
				}
			});
			socket.on('login', data => {
				state.users = data.data.users;
				commit('addMsg', data.data.online);
			});
			socket.on('offline', data => {
				commit('addMsg', data);
			});
			socket.on('message', data => {
				commit('addMsg', data);
			});
			socket.on('update', data => {
				state.users = data;
			});
		},
		// 发送信息
		send ({state, commit}, msg) {
			socket.emit('message', Object.assign(state.self, {content: msg, type: 'msg', time: new Date() * 1}));
		},
	},
});


export default store;