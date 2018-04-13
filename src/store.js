import Vue from 'vue'
import Vuex from 'vuex'

// import mock from 'mock'
// 有疑问  入口文件不是main.js
Vue.use(Vuex)
//[vuex] must call Vue.use(Vuex) before creating a store instance.
var store=new Vuex.Store({
   state:{
       count:6,
       users:""
   },
   getters:{
     count(state){//Getters 接受 state 作为其第一个参数：
        console.log(state);
        return state.count;
     }
   },
   actions:{
     increament(context){
        console.log(context);
        console.log(Vue.prototype.axios);
        // this.axios({
        //   method: 'get',
        //   url: '/user',
        // }).then(function(e){
        //    conosle.log(e);
        // })
        //这里改不符合规范
        // console.log(context.state.count);
        // context.state.count++;
        var promise = new Promise(function(resolve,reject){
                setTimeout(function(){
                  resolve()
                },3000)
        });
        console.log(promise);
        promise.then(function(value){
            console.log("异步执行");
            context.commit('increament')
        })
     },
     decreament({commit,state}){
       if(state.count>10){
         commit('decreament')
       }
     },

   },
   mutations:{
       increament(state){
         console.log(state);
         state.count++;

      },
      decreament(state){
        console.log(state);
        state.count--;

      }
   }
})
export default store;
