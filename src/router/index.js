import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/'
import chat from '@/components/chat/'
import setting from '@/components/setting/setting'
import aboutUs from '@/components/about/about'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			component: login,
			name: 'login',
		},
		{
			path: '/chat',
			component: chat,
			name: 'chat',
			children: [
				{
					path: 'setting',
					component: setting,
					name: 'setting',
				},
				{
					path: 'about',
					component: aboutUs,
					name: 'about',
				},
			]
		},
		{
			path: '*',
			component: login,
			name: 'empty',
		},
	]
})
