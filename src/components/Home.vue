<template>
    <div>
        <router-link :to="{name:'RouterLinkHome'}">
            {{routerLinkHome_page}}
        </router-link>
        <router-link :to="{name:'SlotHome'}">
            {{slotHome_page}}
        </router-link>
        <router-link :to="{name:'LivePeriodHome'}">
            {{livePeriod_page}}
        </router-link>
        <router-link :to="{name:'AxiosHome'}">
            {{axios_page}}
        </router-link>
        <router-link :to="{name:'ElementUIHome'}">
            {{elementUI_page}}
        </router-link>
        
    </div>
</template>

<script>

export default {
    name:"home",
    data:function(){
        return{
            routerLinkHome_page:"路由链接",
            slotHome_page:"插槽试炼",
            livePeriod_page:"生命周期函数",
            axios_page:"axios",
            elementUI_page:"element-ui",
        }
    },
    
    methods:{

    },
}
</script>

<style scoped>

</style>