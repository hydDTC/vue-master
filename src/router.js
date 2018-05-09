// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from  'vue-router'


// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

import userList from './components/ui_user/users.vue'
import userCreate from './components/ui_user/user-create.vue'
import tenantList from './components/ui_tenant/tenant.vue'
import customList from './components/ui_custom/custom.vue'
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/user', component: userList },
    { path: '/userCreate', component: userCreate },
    { path: '/tenant', component: tenantList},
    { path: '/custom', component: customList}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
//导出的不一定是对象
export default router
