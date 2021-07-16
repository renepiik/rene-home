import Vue from 'vue'
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import { MediaQueries } from "vue-media-queries";

import App from './App.vue'

import messages from "./i18n/messages";

import NotesPage from './components/NotesPage.vue'
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import NotFound from "./components/NotFoundPage";
import notesdir from './notesdir';

const mediaQueries = new MediaQueries()

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(mediaQueries)

const i18n = new VueI18n({
	locale: 'et',
	fallbackLocale: 'en',
	messages
});

const routes = [
	{
		path: '/:lang',
		component: {
			template: '<router-view></router-view>'
		},
		beforeEnter: (to, from, next) => {
			const lang = to.params.lang;

			if (!['en', 'et'].includes(lang)) return next('et');

			if (i18n.locale !== lang) i18n.locale = lang;
			
			return next();
		},
		// see on siin, et nested routeid töötaks normaalselt
		beforeRouteUpdate: (to, from, next) => {
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
				children: notesdir
			}
		],
	},
	{
		path: '/',
		redirect: { name: 'Home', params: { lang: 'et' }}
	},
	{
		path: '*',
		component: NotFound
	}
]



const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	router,
	i18n,
	mediaQueries,
	render: h => h(App)
}).$mount('#app')
