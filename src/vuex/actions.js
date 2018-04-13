//共同的actions,触发相同的 tenant,users.js中的mutations
//说明这个动作是连锁效应

import * as types from './mutation-types'
//不是说 "租户列表"要调用 getTenant，"创建用户"要调用 getTenant,所以我们把getTenant这个方法写在actions.js中
//而是,比如当我创建用户的时候，同时对 "租户","用户"都造成了改变，这个时候需要把"创建用户"这个方法写在actions.js中
//有疑问  在整个项目中 这样写会不会有点点问题

//因为我这里没有后台接口,所以我才要处理tenant
//有后台的话，就不用处理tenant
export const createUser=({commit},obj)=>{
    commit(types.CREATE_USERS,obj)
    //本来调用接口 post
    //之后创建成功 返回userList页面
}
