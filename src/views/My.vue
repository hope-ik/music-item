<template>
  <!-- 我的 -->
  <div class="my">
    <top-toolbar></top-toolbar>
    <my-center></my-center>
    <div class="fgrx"></div>
    <ribbon></ribbon>
    <div class="fgrx"></div>
    <recent-play></recent-play>
    <my-song-list></my-song-list>
    <collect-the-playlist></collect-the-playlist>
  </div>
</template>
<script>
import TopToolbar from "../components/TopToolbar";
import MyCenter from "../components/My/MyCenter";
import Ribbon from "../components/My/Ribbon";
import RecentPlay from "@/components/My/RecentPlay";
import MySongList from "@/components/My/MySongList";
import CollectThePlaylist from "@/components/My/CollectThePlaylist";
export default {
  components: {
    TopToolbar,
    MyCenter,
    Ribbon,
    RecentPlay,
    MySongList,
    CollectThePlaylist,
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