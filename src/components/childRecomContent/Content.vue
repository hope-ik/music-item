<template>
  <div class="content">
    <div class="ccc" v-for="(item,index) in list" :key="index">
      <img :src="item.tp" alt />
      <div class="right">
        <div class="box">
          <span class="title">{{item.title}}</span>
        </div>

        <div class="user">
          <img :src="item.tx" alt />
          <span class="user-name">{{item.name}}</span>
        </div>
        <span class="details">{{item.det}}</span>
        <div class="toolbar">
          <span class="zan">{{item.zan}}</span>
          <img :src="item.more" alt />
        </div>
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
          tp: require("../../assets/Desansis/Reol.png"),
          title: "安利[reol REOL Reol]",
          tx: require("../../assets/Desansis/touxiang1.png"),
          name: "Mitorce",
          det: "相信大家对这个名字并不陌生...",
          zan: "64646赞",
          more: require("../../assets/Desansis/more.png"),
        },
        {
          tp: require("../../assets/Desansis/nimanwoman.png"),
          title: "[你瞒着我 我亦瞒住我]",
          tx: require("../../assets/Desansis/touxiang2.png"),
          name: "Screwdriver",
          det: "大学的时候在操场上听到了这... ",
          zan: "32464赞",
          more: require("../../assets/Desansis/more.png"),
        },
        {
          tp: require("../../assets/Desansis/Aimer.png"),
          title: "Aimer[愿你被世界 温柔相待]",
          tx: require("../../assets/Desansis/touxiang3.png"),
          name: "BAY_breeze",
          det: "初识Aimer是在日本乒乓球运动...",
          zan: "6431赞",
          more: require("../../assets/Desansis/more.png"),
        },
        {
          tp: require("../../assets/Desansis/gege.png"),
          title: "[十六载一别]",
          tx: require("../../assets/Desansis/touxiang1.png"),
          name: "Madras",
          det: "9月12日是哥哥张国荣的诞辰,想...",
          zan: "5305赞",
          more: require("../../assets/Desansis/more.png"),
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.content {
  width: 353px;
  height: 150px;

  .ccc {
    width: 353px;
    height: 150px;
    margin-bottom: 19px;
  }
  img {
    width: 140px;
    height: 140px;
    float: left;
    margin: 0px 16px 0px 11px;
  }
  .right {
    width: 185px;
    height: 140px;
    float: right;
    .box {
      width: 100%;
      height: 15px;
      .title {
        font-size: 13px;
        color: #333333;
        float: left;
      }
    }

    .user {
      width: 94px;
      height: 40px;
      position: relative;
      top: 17px;
      display: flex;
      img {
        width: 40px;
        height: 40px;
        position: relative;
        top: 0px;
        left: -10px;
      }
      .user-name {
        font-size: 12px;
        color: #333333;
        position: relative;
        top: 11px;
        left: -18px;
      }
    }
    .details {
      font-size: 12px;
      color: #333333;
      position: relative;
      top: 20px;
      left: -10px;
    }
    .toolbar {
      width: 185px;
      height: 20px;
      position: relative;
      bottom: -38px;
      .zan {
        float: left;
        font-size: 12px;
        color: #333333;
      }
      img {
        width: 3px;
        height: 15px;
        float: right;
      }
    }
  }
}
</style>