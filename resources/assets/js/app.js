require('./bootstrap');

import Vue from 'vue'
import App from '@/App.vue'
import {fetch,post,patch,put,head,destroy} from '@/libs/Ajax'
import {router} from '@/router/index'
import store from './store'


Vue.config.productionTip = false

Vue.prototype.$get = fetch
Vue.prototype.$post = post
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$head = head
Vue.prototype.$delete = destroy

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    mounted () {
      this.$nextTick(function () {
        this.$store.commit('init')
      });
    },
    render: h => h(App)
});
