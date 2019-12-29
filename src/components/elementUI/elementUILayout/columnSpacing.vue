<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">{{font}}</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">{{font}}</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">{{font}}</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">{{font}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "layout",
  data: function() {
    return {
      font: "啦啦啦"
    };
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  text-align: center;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  padding: 10px 0;
  /* min-height: 36px; */
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
