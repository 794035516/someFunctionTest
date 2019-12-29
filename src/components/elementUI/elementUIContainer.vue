<template>
    <div id="container">
        <el-container>
            <el-aside>
                <div class="aside">
                    菜单    
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="header">
                        头部
                    </div>
                </el-header>
                <el-footer>
                    <div class="footer">
                        底部
                    </div>
                </el-footer>
            </el-container>
        </el-container>    
    
    </div>    
</template>

<script>
export default {
    name:"elementUIContainer",
    data:function(){
        return{

        }
    }
}
</script>

<style scoped>
#container{
    padding:0;
    display: flex;
}
.el-container{
    width:100%;
    /* text-align: center */
}
.el-aside{
    display:flex;
    background-color:#E4E7EC;
    justify-content: center;
    align-items: center;
}

.el-header{
    background-color:#606266;
}

.el-footer{
    background-color: #67C23A;
}
</style>