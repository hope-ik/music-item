<template>
  <!-- 推荐歌单 -->
  <div class="Playlist">
    <div class="play-title">
      <span class="play-list">推荐歌单</span>
      <span class="more">
        更多
        <img src="../assets/Index/rigth.png" alt />
      </span>
    </div>
    <div class="chunk-box">
      <template v-for="(item,index) in chunkList">
        <div class="chunk" :key="index">
          <img :src="item.src" alt />

          <div class="PlayFew">
            <img class="bf" src="../assets/Index/bf.png" alt />
            <span>{{item.few}}</span>
          </div>
          <p>{{item.title}}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chunkList: [
        {
          few: "948万",
          src: require("../assets/Index/tj-1.png"),
          title: "【欧美】私人订制",
        },
        {
          few: "163万",
          src: require("../assets/Index/tj-2.png"),
          title: "失眠患者的安眠曲",
        },
        {
          few: "3500万",
          src: require("../assets/Index/tj-3.png"),
          title: "安静看书的背景音乐",
        },
        {
          few: "1020万",
          src: require("../assets/Index/tj-4.png"),
          title: "【电音】自由灵魂与未来声音",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/RePlaylist");
</style>