import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
	count: 0
}

// mutations
export const mutations = {
	[types.INCREASE] (state) {
		state.count += 1;
	},
	[types.DECREASE] (state) {
		state.count -= 1;
	}
}
