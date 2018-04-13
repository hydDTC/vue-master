<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- <h2>从store中拿到的数值 {{this.$store.state.count}}</h2> -->
    <h2>通过mapGetter获取属性count {{count}}</h2>
    <button @click="increament">增加</button>
    <!-- <button type="button" name="button" @click="dispatchObj">dispatch对象</button> -->
    <button @click="decreament">减少</button>

    <hr/>
    form开始:
    <user></user>
    form结束:
  </div>
</template>

<script>
// var vue=new Vue({
//
// })
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import user from './components/ui_user/users.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
      amount:'hyd'
    }
  },
  computed:{
    ...mapGetters([
       'count'
    ])
  },
  // computed:mapGetters([
  //    'count'
  // ]),
  // methods:mapActions([
  //    'increament'
  // ]),
  methods:{
    // ...mapActions([
    //    'increament' // 映射 this.increment() 为 this.$store.dispatch('increment')
    //  ]),
    increament(){
      //this.$store.dispatch({type: 'incrementAsync',  amount: 10})
      this.$store.dispatch('increament',{amount: 10})  //也没有什么效果呀 传递参数?
    },
    decreament(){
      //this.$store.dispatch({type: 'incrementAsync',  amount: 10})
      this.$store.dispatch('decreament',{amount: 10})  //也没有什么效果呀 传递参数?
    }
  },

  components:{
     user:user
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
