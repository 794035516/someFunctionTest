<template>
    <div>
        <el-radio-group>
            <router-link :to="{name:link_name,query:{msg:p.foods}}" 
            v-for="p in place" :key="p.id">
                <el-radio-button >{{p.name}}</el-radio-button>
            </router-link>
        </el-radio-group>

        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name:"elementUIButton",
    data:function(){
        return{
            link_name:"ElementUIPlace",
            place:[
                {
                    name:"上海",
                    foods:["上海白斩鸡",'生煎馒头'],
                },
                {
                    name:"哈尔滨",
                    foods:['马迭尔冰棍','锅包肉','得莫利炖鱼'],
                },
                {
                    name:"苏州",
                    foods:['松鼠桂鱼','碧螺虾仁']
                },
                {
                    name:"成都",
                    foods:['廖排骨','棒棒鸡']
                },
                {
                    name:"南京",
                    foods:['桂花糯米藕']
                },
            ]
        }
    },
}
</script>

<style scoped>

</style>