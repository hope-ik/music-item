<template>
  <div class="CollectThePlaylist">
    <span class="title">我的歌单</span>
    <div class="list">
      <template v-for="(item,index) in collectList">
        <div class="chunk" :key="index">
          <img :src="item.img" alt />
          <span>{{item.title}}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collectList: [
        {
          img: require("../../assets/My/tupian1.png"),
          title: "Reol全曲目收录",
        },
        { img: require("../../assets/My/anj.png"), title: "安静" },
        { img: require("../../assets/My/cyy.png"), title: "纯音乐" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.CollectThePlaylist {
  overflow: hidden;
  position: absolute;
  top: 661px;
  height: 195px;
  margin-left: 10px;
  width: 365px;

  overflow: hidden;
  .title {
    font-size: 15px;
    color: #333333;
    height: 20px;
    width: 80px;
    position: relative;
    left: -152px;
  }
  .list {
    width: 365px;
    margin-left: 10px;
    height: 121px;
    position: relative;
    top: 5px;
    left: -10px;
    display: flex;
    flex-direction: row;

    display: -webkit-box;
    overflow-x: scroll;

    .chunk {
      width: 135px;
      height: 121px;
      margin-right: 30px;

      display: block;

      img {
        width: 135px;
        height: 100px;
        float: left;
      }
      span {
        font-size: 12px;
        color: #333333;
        float: left;
        margin-top: 9px;
      }
    }
  }
}
</style>