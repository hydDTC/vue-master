import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './main.vue'
//默认是 vuex/index.js
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 模块化
import router from './router.js'

//全局只用Vuex
//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
Vue.use(Vuex)
Vue.use(ElementUI)
// Vue.use(VueRouter)
// 通过原型链的方式
Vue.prototype.axios=axios;


new Vue({
    el: '#app',
    store,    //调用 this.$store  其他子组件就全部可以用啦
    router,
    render: h => h(App)
    // components:{  //注册
    //   'my-app':App
    // }
})
