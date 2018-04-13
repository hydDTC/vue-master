<template>
    <div id="user">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <!--type number -->
            <el-form-item label="年龄" prop="age">
                <el-input v-model="ruleForm.age" type="number"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-input v-model="ruleForm.gender"></el-input>
            </el-form-item>
            <el-form-item label="租户" prop="tenant">
                <el-select v-model="ruleForm.tenant" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    var obj={
        computed:{
            //待解
            ...mapGetters({
                options:'getOptions'
            })
        },
       data(){
           return {
               //store页面没有this（vue的实例，但是你可以传递过去进行处理）
               //vue实例只在vue页面
               newObj:{
                   $router:this.$router,
//                   ruleForm:this.ruleForm  //单单这样写不会自动更新  赋值不会自动更新的吧
                   ruleForm:{}
               },
               ruleForm:{
                   name:'',
                   age:0,
                   gender:'',
                   tenant:''
               },
               rules:{
//                   一种验证一种格式
                   name:[{required:true,message:"请输入名称",trigger:'blur'},
                          {min:3,max:6,message:'长度在3-5',trigger:'blur'}
                   ],
                   age:[{required:true,message:"请输入年龄",trigger:'blur'}
                   ],
                   gender:[{required:true,message:"请输入性别",trigger:'blur'}
                   ],
                   tenant:[{required:true}]
               }
           }
       },
        methods:{
            submitForm(ruleForm){
                console.log(this)
                //$refs 这个属性 获取表单
                this.$refs.ruleForm.validate((valid)=>{
                    console.log(valid)
                    if (valid) {
                        //打印出来的ruleForm 是一个常量=="ruleForm"
//                        console.log(ruleForm)
                        //age 虽然input框限制只能输入number，但是打印出来的age是string类型的

                        //要进行赋值
                         this.newObj.ruleForm=this.ruleForm
                        this.$store.dispatch("createUser",this.newObj)
                        //创建成功后调用接口
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
        },
        created(){
            this.$store.dispatch('getTenant')
        }
    }
    export default obj
</script>