<template>
    <!--需要把孩子保存的信息传给父亲-->
    <input type="button" @click="childGo()" value="子传父">
</template>
<script>
    export default {
        name: '',
        data(){
            return {
                title:'child'
            }
        },
        'methods': {
            childGo (msg) {
               this.$emit('newnode','我是从孩子传过来的参数')
            }
        }
    }
</script>