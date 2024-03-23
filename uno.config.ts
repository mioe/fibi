import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
	defineConfig,
	presetIcons,
	presetUno,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			warn: true,
			collections: {
				mi: FileSystemIconLoader(
					'./src/assets/icons',
				),
			},
		}),
	],
})
