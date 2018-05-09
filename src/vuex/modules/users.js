import _users from "../../api/userData.js"
import * as types from '../mutation-types'
import Vue from 'vue'

//用const定义的变量只有在初始化的时候才可以赋值???  这里是因为转化成es5
const state={
    all:[],
    options:[]
}

const getters={
    //函数缩写
    allUsers(state){
        return state.all
    },
    getOptions(state){
        console.log("到这里")
        return state.options
    }
}
//acttions  异步操作 在这里不要进行数据的处理 这里就是获取接口
//可以if
const actions={
    getUsers({commit}){
        // commit(types.RECEIVE_PRODUCTS, { products })
        //string类型
        commit(types.GET_USERS)
    },
    //传递的参数
    // createUser({commit},obj){
    //     commit(types.CREATE_USERS,obj)
    //      //本来调用接口 post
    //     //之后创建成功 返回userList页面
    // },
    getTenant({commit}){
        commit(types.GET_TENANTS)
    }
}
//同步操作
const mutations={
    [types.GET_USERS](state){
        state.all=_users._users;
    },
    [types.CREATE_USERS](state,obj){
        console.log(obj)
        console.log(obj.ruleForm)   //视图全部更新 下面的代码加上id，上面的也有id

        //for循环tenant 找到对应的tenant插入之  这段代码成立  但是我得把处理租户的代码提取到tenant.js
        // for(let i=0;i<_users._tenants.length;i++ ){
        //     if(obj.ruleForm.tenant==_users._tenants[i].id){
        //         //import进来用之的都是全局的变量
        //         _users._tenants[i].data1.push(obj.ruleForm.name)
        //     }
        // }

        var index=_users._users.length;
        index=index+1;
        // Vue.set(obj,'id',index++);  //竟然没有效果
        Vue.set(obj.ruleForm,'id',index);  //vue.$set
        // obj.id=index++       //如果在实例创建之后添加新的属性到实例上，它不会触发视图更新
        _users._users.push(obj.ruleForm);
        obj.$router.push({path:'/user'})
    },
    [types.GET_TENANTS](state){
        // console.log("users")
        state.options=_users._tenants;
    }
}
//所有的都在state

export default{
    state,
    getters,
    actions,
    mutations
}