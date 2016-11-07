import Vue from 'vue';
// import Vue from '../node_modules/vue/dist/vue.js';

/**
 * vue-materialを使用する
 * https://marcosmoura.github.io/vue-material/#/
 */
import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css'
Vue.use(VueMaterial);
Vue.material.theme.registerAll({
    default: {
        primary: 'cyan',
        accent: 'pink'
    },
    phone: {
        primary: 'indigo',
        accent: 'pink'
    }
});

/**
 * Vue Componentを定義する
 */
import App from './app.vue';

console.log(App);

var a = Vue.extend(App);

console.log(a);

// Vue.component('app', a);
// Vue.component('app', App);

new Vue(App).$mount('#app');
new a().$mount('#app');
