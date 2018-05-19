<template>
    <!--唯一div包裹-->
    <div>
        <div ref="msgDiv" @click="changeNext">{{nextChange}}</div>
        <div id="userList">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="gender" label="性别"width="180"></el-table-column>
                <el-table-column prop="age" label="年龄"></el-table-column>
                <el-table-column prop="tenant" label="租户"></el-table-column>
            </el-table>
            <el-button type="primary" @click="createUser()">创建用户</el-button>
        </div>

        <hr/>
        <div>
            父亲传参数给孩子
            <input type="button" name="" id="" @click="parentCall" value="父调子" />
            <!--封装的插件 你是用在什么地方-->
            <user-child ref="chil"></user-child> hello组件
        </div>
        <hr/>
        <div>
           孩子传参数给父亲
            <!--封装的插件 你是用在什么地方-->
            {{title}}<br/>
            <!--自定义方法 父子传参数-->
            <user-child-emit @newnode="parentListen"></user-child-emit>
        </div>
        <div>
            <!--  oninput='inputFun'  input事件 -->
            <input type="text"  v-on:input = 'inputFun' value="1">
            <!--render-->

        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import userChild from './userChild.vue';
import userChildEmit from './userChildEmit.vue';
export default{
    // 一个项目中一个vuex，modules下面能有多个部分的
    //option "el" can only be used during instance creation with the `new` keyword.
    //el:'#userList',

    //生命周期第二步  实例创建完成
    data(){
      return {
          title:'父亲',
          blogTitle:'wiiwiiiiii',
          nextChange:'one'
      }
    },
    created(){
        //待解

        console.log(this.$store)
        //会首先在总体的actions.js文件中找
        //找不到的话 再在各自modules中
        this.$store.dispatch("getUsers")

    },
    render(createElement) {
        return createElement('h1', this.blogTitle)
    },
    //属性
    computed:{
    ...mapGetters({
        //tableData是数组
            tableData: 'allUsers'
        })
    },
    components:{
        userChild,
        userChildEmit
    },
    methods:{
        changeNext(){
            // dom实际内容并没有改变
          this.nextChange = "hyd" ;
          console.log(this.nextChange); //hyd
          console.log(this.$refs.msgDiv.innerHTML) //one
          this.$nextTick( ()=> {
              console.log(this.nextChange); //hyd
              console.log(this.$refs.msgDiv.innerHTML) //hyd
          })
        },
        createUser(){
            this.$router.push({path:'/userCreate'})
        },
        // 父子插件
        // 父亲通过属性调用子插件的方法
        // 一般用props
        parentCall(){
            this.$refs.chil.title="父亲改变了我的title";
            this.$refs.chil.chilFn('父亲传到孩子');
        },
        parentListen(e){
            alert(e);
            this.title = e;
        },
        // 不需要具体的值 动了input就触发
        inputFun(newCode){
            console.log(newCode)
        }

    }
}
</script>
