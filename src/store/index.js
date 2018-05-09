import Vue from 'vue'
import Vuex from 'vuex'
// import { state, mutations } from './mutations.js'
import * as getters from './getter.js'
// import * as actions from './actions.js'
import {state, actions, mutations} from './root.js';

import count from './modules/count'
import todo from './modules/todo'
import shop from './modules/shop'
import opendata from './modules/opendata'

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	// getters,
	actions,
	modules: {
		count,
		todo,
		shop,
		opendata
	},
	strict: true
});
