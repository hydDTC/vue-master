//有导出才有导进
import users from "./modules/users.js"
import tenant from "./modules/tenant.js"
// import {actions} from "./actions.js"
//导入 导出的问题  ??? 待解
import * as actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    modules: {
        users,
        tenant
    }
})