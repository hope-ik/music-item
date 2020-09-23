<template>
  <!-- 顶部导航栏 -->
  <div class="topToolbar">
    <div class="toolbat">
      <div class="menu-box">
        <img src="../assets/Index/menu.png" alt class="menu" />
      </div>
      <ul class="navigation-box">
        <li v-for="(item,index) in Nav" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="search">
        <img src="../assets/Index/search.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Nav: [
        { name: "我的", path: "/my" },
        { name: "发现", path: "/discover" },
        { name: "音乐圈", path: "/desansis" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/toptoolbar.less");
</style>

