import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import NotesPage from './components/NotesPage.vue'
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
/*
import KM1 from './notes/KM1.vue'
import YMMA from './notes/YMMA.vue'
*/
import MMP from './notes/MMP.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{ path: '/notes', component: NotesPage, 
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
	{ path: '/notes/mmp', component: MMP },
	{ path: '/projects', component: ProjectsSection },
	{ path: '/', component: AboutSection }
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
