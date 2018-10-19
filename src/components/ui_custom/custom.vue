<template>

    <div id="tenant">
         我是customer{{num}}
        <customer-child :num="num" :obj="obj"></customer-child>
    </div>

</template>

<script>


    import customerChild from './customer-child.vue';

    export default{
        data(){
            return {
                num: 20,
                obj: {
                    name: 'hyd',
                    age: 30
                }
            }
        },
        created(){
            console.log("页面点进")
        },
        // 要注册组件哈
        components:{
            customerChild
        },
        methods:{

        }
    }
</script>