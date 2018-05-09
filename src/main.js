// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
Vue.config.productionTip = false

// init
Vue.use(VueRouter)
Vue.use(Vuex)

// page
import Hello from './pages/HelloWorld.vue'
import CtoF from './pages/C2F'
import CtoFMethod from './pages/C2FMethod'
import LearnComponent from './pages/LearnComponent'
import Count from './pages/Count'
import Todos from './pages/todo'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Opendata from './pages/open1999'
import Login from './pages/login'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
Vue.use(BootstrapVue)



const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/hello',
			name: 'hello',
			component: Hello
		},
		{
			path: '/c2f',
			name: 'c2f',
			component: CtoF
		},
		{
			path: '/c2fmethod',
			name: 'c2fmethod',
			component: CtoFMethod
		},
		{
			path: '/LearnComponent',
			name: 'LearnComponent',
			component: LearnComponent
		},	
		{
			path: '/count',
			name: 'count',
			component: Count
		},				
		{
			path: '/todos',
			name: 'todos',
			component: Todos
		},
		{
			path: '/shopping',
			name: 'shopping',
			component: Shop
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/opendata',
			name: 'opendata',
			component: Opendata
		},
		{
			path: '/*', redirect: '/hello'
		},
		{
			path: '/login', name: 'login', component: Login
		}
	]
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  store,
  render: h => h(App)
})
