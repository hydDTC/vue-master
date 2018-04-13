<template>

    <div id="tenant">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="名字" width="180"></el-table-column>
            <el-table-column label="日期" width="180">
                <!--获取的方式  有点点问题-->
                <template scope="scope">
                    <span>{{ scope.row.data1 }}</span>
                </template>
            </el-table-column>
            <el-table-column  label="个数"width="180">
                <template scope="scope">
                    <span>{{ scope.row.data1.length }}</span>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="createTenant()">创建租户</el-button>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
     export default{
         data(){
             return {

             }
         },
         computed:{
             ...mapGetters({
                 //tableData是数组
                 tableData: 'allTenants'
             })
         },
         created(){
             console.log("页面点进来，每次都会执行的 tenant")
             this.$store.dispatch('getTenant')
         },
         methods:{
             createTenant(){
                 console.log("创建租户")
             }
         }
     }
</script>