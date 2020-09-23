<template>
  <div class="desansis">
    <top-toolbar></top-toolbar>
    <div class="bg">
      <desansis-bar></desansis-bar>
    </div>
  </div>
</template>
<script>
import TopToolbar from "../components/TopToolbar";
import DesansisBar from "../components/Desansis/DesansisBar";
export default {
  components: {
    TopToolbar,
    DesansisBar,
  },
};
</script>
<style lang="less" scoped>
.desansis {
  width: 100%;
  height: 100%;
  .bg {
    width: 100%;
    height: 120px;
    background: #00ceff;
    border-radius: 50%;
  }
}
</style>