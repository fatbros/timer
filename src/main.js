import Vue from '../node_modules/vue/dist/vue.js';

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
const Sidenav = require('./component/sidenav/sidenav.vue');

new Vue(Sidenav).$mount('#app');
