<template>
    <div>
        <el-row :gutter=20>
            <!-- 浏览器大小为1980px，手机一般大小在992px -->
            <el-col :xs='1' :sm='3' :md='5' :lg="7" :xl="9">
                <div class="grid_content"></div>
            </el-col>
            <el-col :xs='1' :sm='3' :md='5' :lg="7" :xl="9">
                <div class="grid_content"></div>
            </el-col>
            <el-col :xs='1' :sm='3' :md='5' :lg="7" :xl="9">
                <div class="grid_content"></div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.grid_content{
    background-color: #E4E7EC;
    min-height: 24px;
}
</style>