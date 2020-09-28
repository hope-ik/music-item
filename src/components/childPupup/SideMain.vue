<template>
  <div class="center">
    <ul class="side-main">
      <li v-for="(item, index) in message" :key="index">
        <i class="iconfont" :class="item.svg"></i>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <van-divider />
  </div>
</template>

<script>
export default {
  name: "SideMain",
  data() {
    return {
      message: [
        { svg: "icon-piao", title: "演出" },
        { svg: "icon-gouwuche", title: "商城" },
        { svg: "icon-location", title: "附近的人" },
        { svg: "icon-icon", title: "游戏推荐" },
        { svg: "icon-cailing", title: "口袋彩铃" },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.center {
  padding: 0 15px;
}
.side-main {
  color: rgb(107, 106, 106);
}
.side-main li {
  /* display: inline-block; */
  padding: 10px 0;
}
.side-main li i {
  font-size: 22px;
  margin-right: 15px;
  vertical-align: middle;
}
.side-main li p {
  display: inline-block;
  font-size: 17px;
}
</style>
