<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <hr/>
        <router-link to="/user">用户模块</router-link>
        <router-link to="/tenant">租户模块</router-link>
        <router-link to="/custom">客户模块</router-link>
<!--入口-->
        <router-view></router-view>
        <!--<user></user>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
//    import VueRouter from  'vue-router'
//    import user from './components/ui_user/users.vue'
//    import router from './router.js'
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Hello World',

            }
        },
        computed:{

        },
        methods:{

        },
        components:{
//            user:user
        }

    }
</script>


