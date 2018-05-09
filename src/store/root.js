import * as types from './mutations_type.js';

import Vue from 'vue';

export const state = {
	loading: false,
}

export const actions = {
	toggleLoading ({ commit }, isLoading) {
		commit(types.LOADING, isLoading);
	},
	actionLogin ({ commit }, { email, password} ) {
		console.log('1. actionLogin');
		commit(types.LOADING, true);

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email === 'nntnnt@gmail.com' && password === 'aaa') {
					console.log('2. Promise resolve');
					commit(types.LOADING, false);
					resolve();
				} else {
					commit(types.LOADING, false);
					reject();
				}
			}, 1500);
		});
	}
}

export const mutations = {
	[types.LOADING] (state, isLoading) {
		state.loading = isLoading
	},
}