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
    name:"elementUIHome",
    data:function(){
        return{
            menu:[
                {
                    path_name:"ElementUILayout",
                    page_name:"布局",
                },
                {
                    path_name:"ElementUIContainer",
                    page_name:"容器",
                },
                {
                    path_name:"ElementUIButton",
                    page_name:"按钮",
                },
                {
                    path_name:"ElementUICheckbox",
                    page_name:"复选框",
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>