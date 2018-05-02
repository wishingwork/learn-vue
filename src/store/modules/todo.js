const types = {
  ADD_TODO: 'todo/CREATE_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  DELETE_TODO: 'todo/DELETE_TODO',
  UPDATE_TODO: 'todo/UPDATE_TODO',
}

const state = {
	todos: [
		{key: 0, content: 'vue.js 2.0', done: true},
		{key: 1, content: 'vuex 2.0', done: false},
		{key: 2, content: 'vue-router 2.0', done: false},
		{key: 3, content: 'vue-resourece 2.0', done: false},
		{key: 4, content: 'webpack', done: false}
	]
}

const getters = {
	getDone (state) {
		return state.todos.filter((item) => {
			return item.done;
		});
	},
	getTodo (state) {
		return state.todos.filter((item) => {
			return !item.done;
		})
	}	
}

const actions = {
	addTodo ({commit}, newTodo) {
		commit(types.ADD_TODO, newTodo);
	},
	toggleTodo ({commit}, key) {
		commit(types.TOGGLE_TODO, key);
	},
	deleteTodo ({commit}, key) {
		commit(types.DELETE_TODO, key);
	},
	updateTodo ({commit}, obj) {
		console.log('updateTodo', obj);
		commit(types.UPDATE_TODO, obj);
	}	
}

let todoKey = state.todos.length;

const mutations = {
	[types.ADD_TODO] (state, newTodo) {
		state.todos.push({
			key: todoKey,
			content: newTodo,
			done: false
		});
		todoKey++;
	},
	[types.TOGGLE_TODO] (state, obj) {
		for(var i in state.todos) {
			var item = state.todos[i];
			if( item.key === obj.key ) {
				item.done = obj.checked;
				console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
				break;
			}
		}
	},	
	[types.DELETE_TODO] (state, key) {
		for(var i in state.todos) {
			var item = state.todos[i];
			if( item.key === key ) {
				console.log('DELETE_TODO:', item.content, 'index?', i);
				state.todos.splice(i, 1);
				break;
			}
		}
	},
	[types.UPDATE_TODO] (state, obj) {
		for(var i in state.todos) {
			var item = state.todos[i];
			if( item.key === obj.key) {
				console.log('UPDATE_TODO:', item.content, ' to -> ', obj.change);
				state.todos[i].content = obj.change;
				break;			
			}
		}
	},	
}

export default {
	state,
	getters,
	actions,
	mutations
}