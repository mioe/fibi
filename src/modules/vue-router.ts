import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '~/404.vue'
import routes from '~pages'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		...routes,
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
	],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export {
	router,
}
