<template>

    <div>
        <hr/>
        {{title}}
        父亲传过来的年龄：{{num}}
        父亲传过来的对象: {{obj.name}}
    </div>

</template>



<script>

    export default {
        name:'',
        props: ["num","obj"],
        data(){
            return {
                // num:'', // 要记得初始化定义的
                title:'我是customer的子组件'
            }
        },
        'methods': {

        }
    }
</script>
