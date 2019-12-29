<template>
    <div>
        <li v-for='bar in bars' :key="bar.id">
            <router-link :to="{name:'LivePeriodClick',query:{msg:bar.name}}" >
                {{bar.name}}
            </router-link>
        </li>
        <router-view></router-view>
    </div>
</template>

<script>
import livePeriodClick from '@/components/livePeriodHome/livePeriodClick'
export default {
    name:"livePeriodHome",
    data:function(){
        return{
            abc:"abc",
            bars:[
                {
                    name:'首页',
                },
                {
                    name:'学院',
                },
                {
                    name:'下载',
                },
                {
                    name:'论坛',
                },
            ],
        }
    },
    components:{
        livePeriodClick,
    }
}
</script>

<style scoped>
li{
    display: inline;
}
</style>