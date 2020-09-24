<template>
  <div class="songList">
    <span class="title">我的歌单</span>
    <div class="list">
      <template v-for="(item,index) in songList">
        <div class="chunk" :key="index">
          <img :src="item.img" alt />
          <span>{{item.title}}</span>
        </div>
      </template>
    </div>
    <div class="add">
      <img src="../../assets/My/add.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songList: [
        { img: require("../../assets/My/yueyu.png"), title: "粤语" },
        { img: require("../../assets/My/yingyu.png"), title: "英语" },
        { img: require("../../assets/My/riyu.png"), title: "日语" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.songList {
  width: 365px;
  height: 262px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;

  overflow: hidden;

  .title {
    font-size: 15px;
    color: #333333;
    height: 20px;
    width: 80px;
    position: relative;
    left: -10px;
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
  .add {
    width: 365px;
    margin-left: 10px;
    height: 121px;
    position: relative;
    top: 5px;
    left: -10px;
    img {
      width: 137px;
      height: 103px;
      float: left;
      margin-top: 12px;
    }
  }
}
</style>