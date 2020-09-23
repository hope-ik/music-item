<template>
  <div class="MyCenter">
    <img class="tx" src="../../assets/My/touxiang.png" alt />
    <span class="name">Dearest</span>
    <img class="xb" src="../../assets/My/xb.png" alt />
    <img class="rig" src="../../assets/My/right.png" alt />
    <span class="edit">编辑资料</span>
  </div>
</template>
<style lang="less" scoped>
.text() {
  color: #333333;
}
.MyCenter {
  width: 365px;
  height: 76px;
  .tx {
    width: 60px;
    height: 60px;
    float: left;
    margin: 8px 0px 0px 11px;
  }
  .name {
    font-size: 12px;
    .text;
    position: relative;
    left: -76px;
    top: 20px;
  }
  .xb {
    width: 16px;
    height: 16px;
    position: relative;
    left: -67px;
    top: 24px;
  }
  .edit {
    float: right;
    font-size: 8px;
    color: #999999;
    position: relative;
    top: 30px;
    right: 9px;
  }
  .rig {
    width: 6px;
    height: 10px;
    float: right;
    position: relative;
    top: 31px;
  }
}
</style>