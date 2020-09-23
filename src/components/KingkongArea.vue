<template>
  <!-- 金刚区 -->
  <div class="KingkongArea">
    <template v-for="(item,index) in chunkList">
      <div class="chunk" :key="index">
        <img :src="item.src" alt />
        <p>{{item.title}}</p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chunkList: [
        { id: 1, src: require("../assets/Index/mrtj.png"), title: "每日推荐" },
        { id: 2, src: require("../assets/Index/ph.png"), title: "排行榜" },
        { id: 3, src: require("../assets/Index/hot.png"), title: "热门歌单" },
        { id: 4, src: require("../assets/Index/dt.png"), title: "电台" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/KingkongArea");
</style>