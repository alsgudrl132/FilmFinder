export const state = () => ({
	state: {
		title: '',
	},
})

export const mutations = {
	setTitle(state, payload) {
		state.title = payload
	},
}
