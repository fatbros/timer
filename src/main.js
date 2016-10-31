// var Vue = require('vue');
// var appOptions = require('./app.vue');
// var app = new Vue(appOptions).$mount('#app');

class Sample {
    constructor(num = 1) {
    this.number = num;
    }
    getNumber() {
    console.log(`Number is ${this.number}`);
    }
    setNumber(num) {
    this.number = num;
    }
}
