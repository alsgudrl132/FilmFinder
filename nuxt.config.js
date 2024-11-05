export default {
	target: 'static',
	router: {
		base: '/FilmFinder/',
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'filmfinder',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~/plugins/eventBus.js'],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/dotenv',
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: '/',
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	env: {
		apiToken: process.env.VUE_APP_API_TOKEN, // .env 파일에서 apiToken을 가져옵니다.
	},

	server: {
		port: 3003,
	},
}
