<template>
  <!-- 底部播放 -->
  <div class="tabbar" @click="goPlayPage">
    <div class="chunk">
      <div class="chunk-left">
        <img src="../assets/Index/reol.png" alt />
        <div class="title">
          <span class="song">宵夕古今</span>
          <br />
          <span class="name">Reol</span>
        </div>
      </div>
      <div class="chunk-right">
        <img class="bofang" src="../assets/Index/bofang.png" alt />
        <img class="menu" src="../assets/Index/menu.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goPlayPage() {
      this.$router.push({ path: "/playpage" });
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/TabBar");
</style>