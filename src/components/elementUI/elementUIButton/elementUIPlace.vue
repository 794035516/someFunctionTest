<template>
    <div>
        <p v-for="f in food" :key="f"> 
            {{f}}
        </p>
        <button @click="getBack">{{back}}</button>
    </div>
</template>

<script>
export default {
    name:"elementUIPlace",
    data:function(){
        return{
            food:this.$route.query.msg,
            back:"返回",
        }
    },
    watch:{
        $route:function(to,from){
            this.init();
        }
    },
    methods:{
        init(){
            this.food=this.$route.query.msg;
        },
        getBack(){
            this.$router.go(-1);
        }

    }
}
</script>

<style scoped>

</style>