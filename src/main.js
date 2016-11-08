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

new Vue({
    el: '#app',
    // @see https://vuejs.org/v2/guide/instance.html
    // beforeMountイベントが走る前に、Appコンポネントをテンプレートとしてrenderする
    render: function(createElement) {
        return createElement(App);
    }
});


// new Vue(App).$mount('#app');