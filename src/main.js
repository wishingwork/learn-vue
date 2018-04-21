// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

// init
Vue.use(VueRouter)

// page
import Hello from './pages/HelloWorld.vue'
import CtoF from './pages/C2F'
import CtoFMethod from './pages/C2FMethod'
import LearnComponent from './pages/LearnComponent'

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
			path: '/*', redirect: '/hello'
		}
	]
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
