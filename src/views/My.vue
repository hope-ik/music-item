<template>
  <div class="my">
    <top-toolbar></top-toolbar>
    <my-center></my-center>
    <div class="fgrx"></div>
    <ribbon></ribbon>
    <div class="fgrx"></div>
  </div>
</template>
<script>
import TopToolbar from "../components/TopToolbar";
import MyCenter from "../components/My/MyCenter";
import Ribbon from "../components/My/Ribbon";
export default {
  components: {
    TopToolbar,
    MyCenter,
    Ribbon,
  },
};
</script>
<style lang="less" scoped>
.my {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -55px;
  .fgrx {
    width: 375px;
    height: 10px;
    background: #999999;
    opacity: 0.4;
  }
}
</style>