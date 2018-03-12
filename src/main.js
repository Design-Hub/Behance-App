// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the vue router
import VueRouter from 'vue-router'
//import the vue resorce
import VueResource from 'vue-resource'
//import the vuefire
import VueFire from 'vuefire'
//import the App component
import App from './App'

//tell Vue to use the router
Vue.use(VueRouter)
//tell Vue to use the resource
Vue.use(VueResource)
//tel vue to use the vuefire
Vue.use(VueFire)

//import components
import Home from './components/Home/Home'
import Jay from './components/GameDesign-Jay/GameDesign-Jay'
import Mike from './components/GraphicDesign-Mike/GraphicDesign-Mike'
import Victor from './components/Photography-Victor/Photography-Victor'
import Contact from './components/Contact/Contact'
import VictorPhotographerListPage from './components/Photography-Victor/Photographer-list-page-Victor'

const routes = [
  { path: '/', component: Home },
  { path: '/gameDesign', component: Jay },
  { path: '/graphicDesign', component: Mike },
  { path: '/photography', component: Victor},
  { path: '/photographer-list-page', component: VictorPhotographerListPage},
  { path: '/contact', component: Contact }

];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
