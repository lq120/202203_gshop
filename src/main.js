// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
/*入口JS */
import Vue from 'vue';
import App from './App';

import { Button } from 'mint-ui'

import router from './router';
import store from './store'

import './mock/mockServer'

Vue.component(Button.name, Button) //<mt-button></mt-button>

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: { App },
    // template: '<App/>'
    render: c => c(App),
    router,
    store
});