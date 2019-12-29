<template>
<!-- 
    这里要实现的功能是：
    三个按钮，点击之后，在router-view中显示响应的页面
 -->
    <div>
        <router-link :to="{name:'FirstLayer',query:{msg:first_btn}}">
            {{first_btn }}
        </router-link>
        <router-link :to="{name:'FirstLayer',query:{msg:second_btn}}">
            {{second_btn}}
        </router-link>
        <router-link :to="{name:'FirstLayer',query:{msg:third_btn}}">
            {{third_btn }}
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import firstLayer from '@/components/routerLinkHome/firstLayer'
export default {
    name:'routerLinkHome',
    components:{
        firstLayer,
    },
    data:function(){
        return{
            first_btn:"第一个按钮",
            second_btn:"第二个按钮",
            third_btn:"第三个按钮",
            data:"clicked the button",
        }
    },
    methods:{
        first:function(value){
            this.data = value;
        },
        second:function(){

        },
        third:function(){

        },
    }
}
</script>

<style scoped>

</style>