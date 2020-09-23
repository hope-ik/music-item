import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'; //适配rem
import 'normalize.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import animated from "animate.css"
Vue.use(animated)
import less from "less"
Vue.use(less)
    // import stylus from "stylus"
    // Vue.use(stylus)

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')