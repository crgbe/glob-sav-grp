import { createStore } from "vuex";

const store = createStore({
	state () {
		return {
			url: 'http://glob-sav-grp.localhost:8080',
			api: 'http://glob-sav-grp.localhost:8080/api',
		}
	},
	getters: {
		getURL(state) {
			return state.url
		},
		getAPI(state) {
			return state.api
		}
	}
})

export default store