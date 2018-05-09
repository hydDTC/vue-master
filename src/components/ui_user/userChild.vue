<template>
    <div class="hello">{{title}}</div>
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
            chilFn (msg) {
                alert(msg)
            }
        }
    }
</script>