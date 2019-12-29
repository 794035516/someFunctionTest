<template>
    <div>
        <el-row   type="flex" justify="center">
            <el-col :span="3">
                <div class="grid_content1">
                    {{font}}
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid_content2">
                    {{font}}
                </div>
            </el-col>
        </el-row>
        <el-row   type="flex" justify="space-around">
            <el-col :span="3">
                <div class="grid_content1">
                    {{font}}
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid_content2">
                    {{font}}
                </div>
            </el-col>
        </el-row>
        <el-row   type="flex" justify="space-between">
            <el-col :span="3">
                <div class="grid_content1">
                    {{font}}
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid_content2">
                    {{font}}
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"flexLayout",
    data:function(){
        return{
            font:"啦啦啦",
        }
    }
}
</script>

<style scoped>
.el-row{
    margin-bottom:20px;
}   
.el-col{
    text-align: center;
}
.el-col div{
    padding:10px 0;
}
.grid_content1{
    background-color: #E4E7ED;
}
.grid_content2{
    background-color: #909399;
}
.grid_content3{
    background-color: #C0C4CC;
}
</style>