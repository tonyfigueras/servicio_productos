require('./bootstrap');
require('admin-lte');
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import swal from "sweetalert2";
window.swal = swal;
Vue.use(Vuetify);
Vue.use(VueRouter);


let routes = [
	{
		path: "/home",
		
		component: require('./components/Dashboard.vue').default
	  },
	{ path: '/dashboard', component: require('./components/Dashboard.vue').default },
	{ path: '/servicios', component: require('./components/Servicios/template.vue').default },
   
]

const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: "exact-active",
})

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify()
});
