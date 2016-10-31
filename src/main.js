import Vue from '../node_modules/vue/dist/vue.js';
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

const sidenav = require('./sidenav.vue');
var app = new Vue(sidenav).$mount('#app');

// new Vue({
//     el: '#app'
// });
