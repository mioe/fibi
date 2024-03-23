import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'uno.css'
import './style.css'

/**
 * Modules
 */
import { pinia } from './modules/pinia'
import { head } from './modules/unhead'
import { i18n, loadLanguageAsync, getDefaultLocale } from './modules/vue-i18n'
import { router } from './modules/vue-router'

/**
 * init app
 */
createApp(App)
	.use(i18n)
	.use(head)
	.use(pinia)
	.use(router)
	.mount('#app')

/**
 * do something after init app
 */
const defaultLocale = getDefaultLocale()
loadLanguageAsync(defaultLocale)
