import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuescroll from 'vuescroll';

import './assets/scss/index.scss';

Vue.config.productionTip = false

Vue.use(vuescroll, {
    ops: {
        vuescroll: {
            wheelScrollDuration: 300,
        },
        scrollPanel: {
            speed: 3000,
            easing: 'easeInQuad'
        },
        rail: {},
        bar: {
            background: '#ccc',
        }
    },
});
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    render: h => h(App),
}).$mount('#app')
