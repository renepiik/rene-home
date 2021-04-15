import Vue from 'vue'
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import App from './App.vue'
import NotesPage from './components/NotesPage.vue'
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import messages from "./i18n/messages";
/*
import KM1 from './notes/KM1.vue'
import YMMA from './notes/YMMA.vue'
*/
// import MMP from './notes/MMP.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueI18n)

const routes = [
	{
		path: '/:lang',
		component: {
			template: '<router-view></router-view>'
		},
		beforeEnter: (to, from, next) => {
			const lang = to.params.lang;

			if (!['en', 'et'].includes(lang)) return next('en');

			if (i18n.locale !== lang) i18n.locale = lang;

			return next();
		},
		children: [
			{ 
				path: '', 
				name: 'Home', 
				component: AboutSection 
			},
			{ 
				path: 'projects', 
				name: 'Projects', 
				component: ProjectsSection 
			},
			{ 
				path: 'notes',
				name: 'Notes',
				component: NotesPage, 
				children: [
					/*
					{
						path: 'km1',
						component: KM1
					},
					{
						path: 'ymma',
						component: YMMA
					},
					*/	
				]
			},
			// { path: '/notes/mmp', component: MMP },
		],
	},
	{
		path: '*',
		redirect() {
			return '/en'
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages
});

new Vue({
	router,
	i18n,
	render: h => h(App),
}).$mount('#app')
