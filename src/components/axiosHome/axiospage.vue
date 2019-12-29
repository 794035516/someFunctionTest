<template>
    <div>
        <p>
            {{content.title}}
        </p>
        <article>
            {{content.body}}

        </article>
        <button @click="btn_getBack">
            {{btn}}
        </button>
    </div>
</template>

<script>
export default {
    name:"axiosPage",
    data:function(){
        return{
            id:this.$route.query.id,
            content:{},
            btn:"返回",
        }
    },
    created:function(){
        this.axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(data =>{
            this.content = data.data;
            // console.log(data);
        })
    },
    methods:{
        btn_getBack:function(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
div{
    border: 1px dotted #E4E7EC;
    padding:10px 20px;
}
p{
    text-align: center;
    font-size: 22px;
    font-weight: 700;
}
</style>