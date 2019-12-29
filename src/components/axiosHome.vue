<template>
    <div>
        <li  v-for="m in msg.slice(0,5)" :key="m.id">
            <!-- <router-link :to="{page:'/axiosHome/axiosPage'}"> -->
            <router-link :to="{name:page,query:{id:m.id}}">
                {{m.title}}
            </router-link>
                
        </li>
        <router-view></router-view>
    </div>    
</template>

<script>
export default {
    name:"axiosHome",
    data:function(){
        return{
            msg:[],
            page:"AxiosPage",
        }
    },
    created:function(){
        this.axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(data =>{
            this.msg = data.data;
            // console.log(this.msg);
            // console.log(data.data);
        })
    },
    methods:{
        clk:function(i){
            console.log("---");
            console.log(i);
        }
    }
}
</script>
 
<style scoped>
li{
    display: block;
}
</style>