<template>
  <div class="ReSinger">
    <div class="top">
      <span class="re1">推荐歌手</span>
      <span class="re2">日语&nbsp;|&nbsp;华语&nbsp;|&nbsp;英语&nbsp;|&nbsp;组合&nbsp;|&nbsp;其他</span>
      <span class="more">
        更多
        <img src="../assets/Index/rigth.png" alt />
      </span>
    </div>
    <div class="ReBar">
      <div class="chunk" v-for="(item,index) in list" :key="index">
        <div class="box"></div>
        <img :src="item.src" alt />
        <div class="name">{{item.name}}</div>
        <div class="rName">{{item.rName}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("../assets/Index/tc-1.png"),
          name: "米津玄师",
          rName: "よねづ",
        },
        {
          src: require("../assets/Index/tc-2.png"),
          name: "Reol",
          rName: "れをる",
        },
        {
          src: require("../assets/Index/tc-3.png"),
          name: "Aimer",
          rName: "エメ",
        },
        {
          src: require("../assets/Index/tc-4.png"),
          name: "LiSa",
          rName: "织部里沙",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/ReSinger.less");
</style>