<template>
  <!-- 个人中心 功能区 -->
  <div class="Ribbon">
    <div class="box">
      <div class="chunk" v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt />
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { img: require("../../assets/My/muisc.png"), title: "本地音乐" },
        { img: require("../../assets/My/xz.png"), title: "下载" },
        { img: require("../../assets/My/zjbof.png"), title: "最近播放" },
        { img: require("../../assets/My/Mylove.png"), title: "我的喜欢" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.Ribbon {
  width: 100%;
  height: 100px;
  //   background: rebeccapurple;
  .box {
    width: 334px;
    height: 52px;
    margin: 0 auto;
    position: relative;
    top: 25px;
    display: flex;
    flex-direction: row;
    .chunk {
      width: 85px;
      height: 50px;
      //   margin-right: 58px;
      img {
        width: 30px;
        height: 30px;
      }
      div {
        font-size: 12px;
        color: #333333;
      }
    }
  }
}
</style>