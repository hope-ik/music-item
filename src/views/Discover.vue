<template>
  <div class="index">
    <top-toolbar></top-toolbar>
    <tab-bar></tab-bar>
    <div class="bg">
      <swipe></swipe>
      <kingkong-area></kingkong-area>
      <re-playlist></re-playlist>

      <re-singer></re-singer>
      <re-list></re-list>
    </div>
  </div>
</template>

<script>
import TopToolbar from "../components//TopToolbar";
import Swipe from "../components/Swipe";
import KingkongArea from "../components/KingkongArea";
import RePlaylist from "../components/RePlaylist";
import TabBar from "../components/TabBar";
import ReSinger from "../components/ReSinger";
import ReList from "../components/ReList";
export default {
  data() {
    return {};
  },
  components: {
    TopToolbar,
    Swipe,
    KingkongArea,
    RePlaylist,
    TabBar,
    ReSinger,
    ReList,
  },
};
</script>
<style  lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
}

.bg {
  background: url("../assets/bg.png") no-repeat;
  width: 100%;
  height: 667px;
  z-index: -10;
  position: relative;
  top: 51px;
  background-size: 100% 100%;
}
</style>