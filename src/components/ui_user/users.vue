<template>
    <div id="userList">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="gender" label="性别"width="180"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="tenant" label="租户"></el-table-column>
        </el-table>
        <el-button type="primary" @click="createUser()">创建用户</el-button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default{
    //option "el" can only be used during instance creation with the `new` keyword.
    //el:'#userList',

    //生命周期第二步  实例创建完成
    created(){
        //待解
        console.log(this.$store)
        //会首先在总体的actions.js文件中找
        //找不到的话 再在各自modules中
        this.$store.dispatch("getUsers")
    },
    //属性
    computed:{
    ...mapGetters({
        //tableData是数组
            tableData: 'allUsers'
        })
    },
    methods:{
        createUser(){
            this.$router.push({path:'/userCreate'})
        }
    }
}
</script>
