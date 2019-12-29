<template>
    <div>
        <!-- <el-checkbox v-model="checkAll" :indeterminate='determinate'  
        @change="checkIsAll">
            全选
        </el-checkbox> -->
        
        <el-button type="text" size="mini" @click="checkIsOthers">
            反选
        </el-button>
        <!-- without v-model in el-checkbox-group,it would appear an error
            of length  of undefined
         -->
       <el-checkbox-group v-model="checkbox" @change="changeBtn"> 
           <el-checkbox v-for="btn in btns" :key="btn.id" 
           :label="btn.value">  
               {{btn.name}}
           </el-checkbox>
       </el-checkbox-group> 
       
       <div>
           <p>{{checkbox}}</p>
           <p>{{results}}</p>
       </div>
    </div>
</template>

<script>
export default {
    name:'elementUICheckbox',
    data:function(){
        return{
            btns:[
                {
                    name:"上海",
                    value:"1",
                },
                {
                    name:"北京",
                    value:"2",
                },
                {
                    name:"广东",
                    value:"3",
                },
                {
                    name:"苏州",
                    value:"4",
                },
            ],
            checkbox:["1"],
            //是否全部勾选
            checkAll:false,
            //是否部分勾选
            determinate:true,
            // 将 checkbox的值转成btns中的name
        }
    },
    components:{},
    computed:{
        //将value值转成name
        results(){
            return this.btns.filter(v =>{
                return this.checkbox.includes(v.value);
            }).map(v => v.name)
        }
    },
    mounted:function(){},
    created:function(){

    },
    methods:{
        changeBtn(val){
            let count = val.length;
            // 通过检查长度，从而点完每一个按钮联动全选按钮的勾中
            this.checkAll = count == this.btns.length;
            this.determinate = count > 0 && count < this.btns.length ;
        },
        checkIsAll(val){
            // 通过修改el-checkbox-group的v-model属性，实现点击全选按钮
            console.log(val)
            // console.log(val.target.checked)
            this.checkbox = val ? this.btns.map(data => data.value) : [];
            //只要勾了一次全选按钮，就不再是不确定的，而是确定的，情况有两种
            //  要么全部勾中，要么全部没有勾中，所以状态是确定的
            this.determinate = false;
        },
        //反选
        checkIsOthers(val){
            this.checkbox = this.btns.map(el => el.value).filter(data =>{
               return !this.checkbox.includes(data);
            });   
        },
    },
}
</script>

<style scoped>
</style>