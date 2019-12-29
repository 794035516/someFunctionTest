<template>
    <div>
        <li v-for="m in menu" :key="m.id">
            <router-link :to="{name:m.path_name}">
                {{m.page_name}}
            </router-link>
        </li>
            
        <router-view></router-view>
    </div>    
</template>

<script>
export default {
    name:'element-ui',
    data:function(){
        return {
            menu:[
                {
                    path_name:'ColumnSpacing',
                    page_name:"分栏间隔",
                },
                {
                    path_name:'FlexLayout',
                    page_name:"Flex布局",
                },
                {
                    path_name:'GridLayout',
                    page_name:"Grid布局",
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>