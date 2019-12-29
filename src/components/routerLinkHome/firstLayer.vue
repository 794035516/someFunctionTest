<template>
    <!-- <p>{{this.$route.query.msg}} 123</p> -->
    <p>{{msg}} 123</p>
    
</template>

<script>
export default {
    name:"firstLayer",
    data:function(){
        return{
            // msg:'这是第一个页面',
            msg:this.$route.query.msg,
        }
    },
    props:{
        // msg:{
        //     type:String,
        //     default:"maybe something is on the road",
        // }
    }
}
</script>

<style scoped>
p{
    box-sizing: border-box;
    border: 1px dotted black ;
    margin-top:10px;
    max-width: 22%;
    text-align: center;
    padding:10px 20px ;
}
</style>