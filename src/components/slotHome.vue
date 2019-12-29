<template>
    <div>
        <Before v-if="status">
            <form slot="before">
                <div>
                    <span>{{title}}</span>
                    <input type="text"/>
                </div>
                <div>
                    <span>{{content}}</span>
                    <textarea></textarea>
                </div>
                
            </form>
        </Before>

        <After v-if="!status">
            <p slot="after">
                {{done}}
            </p>
        </After>
        <div>
            <button @click.prevent="skip">
                {{skip_btn}}
            </button>
        </div>
    </div>    
</template>

<script>
import before from '@/components/slotHome/before'
import after from '@/components/slotHome/after'
export default {
    name:"slotHome",
    data:function(){
        return{
            title:"标题",
            content:"内容",
            status:true,
            skip_btn:"跳转",
            done:"感谢填写数据，请返回到主页面...",
        }
    },
    components:{
        Before:before,
        After:after,
    },
    methods:{
        skip:function(){
            this.status = !this.status;
            
        }
    }
    
}
</script>

<style scoped>

</style>