import _users from "../../api/userData.js"
//像_users这种对象 全局???????
import * as types from '../mutation-types'
import Vue from 'vue'

const state={
    all:[]
}

const getters={
    allTenants(state){
        return state.all;
    }
}

const actions={
    getTenant({commit}){
        commit(types.GET_TENANTS)
    }
}

//同步操作   当然会全部调用啦
const mutations={
     [types.GET_TENANTS](state){
         // console.log("tenant")
         state.all=_users._tenants;
     },
    [types.CREATE_USERS](state,obj){
         //对于租户的处理
        //for循环tenant 找到对应的tenant插入之
        console.log("tenant")
        //state.all 在我创造用户的时候 并没有打开租户列表，竟然可以打印出来值
        console.log(state.all)
        for(let i=0;i<_users._tenants.length;i++ ){
            if(obj.ruleForm.tenant==_users._tenants[i].id){
                //import进来用之的都是全局的变量
                _users._tenants[i].data1.push(obj.ruleForm.name)
            }
        }
    },
}
//所有的都在state

export default{
    state,
    getters,
    actions,
    mutations
}