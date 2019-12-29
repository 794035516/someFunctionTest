<template>
    <div>
        <p @click="clk">
            这是一个{{msg}},没啥意思...
        </p>
    </div>    
</template>

<script>
export default {
    name:"livePeriodClick",
    data:function(){
        return{
            msg:this.$route.query.msg,
        }
    },
    methods:{
        clk:function(){
            console.log(this.msg);
        }
    },
    watch:{
        $route(to,from){
            if(this.$route.query.msg){
                this.msg = this.$route.query.msg;
            }
        }
    }

}
</script>

<style scoped>

</style>