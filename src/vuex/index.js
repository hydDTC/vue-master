//有导出才有导进
import users from "./modules/users.js"
import tenant from "./modules/tenant.js"
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