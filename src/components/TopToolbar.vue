<template>
  <!-- 顶部导航栏 -->
  <div class="topToolbar">
    <div class="toolbat">
      <div class="menu-box" @click="pupup">
        <img src="../assets/Index/menu.png" alt class="menu" />
      </div>
      <ul class="navigation-box">
        <li v-for="(item, index) in Nav" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="search">
        <img src="../assets/Index/search.png" alt />
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="left"
      get-container=".top-toolbar"
      :style="{ width: '85%', height: '100%' }"
    >
      <nav-bar-side></nav-bar-side>
    </van-popup>
  </div>
</template>
<script>
import NavBarSide from "../components/childPupup/NavBarSide";
export default {
  name: "topToolbar",
  data() {
    return {
      Nav: [
        { name: "我的", path: "/my" },
        { name: "发现", path: "/discover" },
        { name: "音乐圈", path: "/desansis" },
      ],
      show: false,
    };
  },
  components: {
    NavBarSide,
  },
  methods: {
    pupup() {
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/toptoolbar.less");
</style>

