import { createApp } from 'vue'

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomePage from '@/pages/HomePage.vue'
import PageTwo from '@/pages/PageTwo.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: "home",
			path: "/",
			component: HomePage,
		},
		{
			name: "page-2",
			path: "/page-2",
			component: PageTwo,
		},
	],
});

const app = createApp(App);

app.use(router);
app.mount('#app')
