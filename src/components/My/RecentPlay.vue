<template>
  <!-- 最近播放 -->
  <div class="Recentplay">
    <div class="box">
      <div class="title">
        <span>最近播放</span>
        <div class="more">
          <span>更多</span>
          <img src="../../assets/My/right.png" alt />
        </div>
      </div>
      <div class="details">
        <div class="left">
          <img src="../../assets/My/tupian2.png" alt />
          <img src="../../assets/My/gdie.png" alt />
          <span>Reol全曲目收录</span>
        </div>
        <div class="right">
          <div class="chunk" v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt />
            <div class="text">
              <span>{{item.title}}</span>
              <span>{{item.name}}</span>
            </div>
          </div>
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
          img: require("../../assets/My/diliugan.png"),
          title: "第六感",
          name: "Reol-第六感",
        },
        {
          img: require("../../assets/My/jinzita.png"),
          title: "insider",
          name: "Reol-金字塔",
        },
        {
          img: require("../../assets/My/shishishang.png"),
          title: "十中八九",
          name: "Reol-事実上(Sp..",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.Recentplay {
  width: 100%;
  height: 183px;
  .box {
    width: 95%;
    height: 169px;
    position: relative;
    top: 14px;
    margin-left: 10px;
    .title {
      width: 100%;
      height: 15px;
      span:nth-child(1) {
        font-size: 15px;
        color: #333333;
        float: left;
      }
      .more {
        width: 30px;
        height: 10px;
        float: right;
        span {
          font-size: 9px;
          color: #666666;
          position: relative;
          right: 7px;
        }
        img {
          width: 6px;
          height: 10px;
          position: relative;
          top: -12px;
        }
      }
    }
    .details {
      width: 100%;
      height: 100%;
      .left {
        width: 154px;
        height: 121px;
        position: relative;
        top: 10px;
        display: flex;
        flex-direction: column;
        left: -60px;
        img:nth-child(1) {
          width: 120px;
          height: 100px;
          border-radius: 5px;
          z-index: 10;
        }
        img:nth-child(2) {
          width: 81px;
          height: 80px;
          position: relative;
          top: -89px;
          left: 77px;
        }
        span {
          font-size: 12px;
          color: #333333;
          position: relative;
          top: -71px;
          left: -35px;
        }
      }
      .right {
        width: 189px;
        height: 121px;
        float: right;
        top: -111px;
        position: relative;
        left: -13px;
        display: flex;
        flex-direction: column;
        .chunk {
          width: 100%;
          height: 35px;
          display: flex;
          flex-direction: row;
          img {
            width: 30px;
            height: 30px;
            margin: 3px 8px 3px 3px;
          }
          .text {
            span:nth-child(1) {
              font-size: 12px;
              color: #333333;
              line-height: 35px;
              margin-right: 10px;
              float: left;
            }
            span:nth-child(2) {
              font-size: 9px;
              color: #666666;
              line-height: 35px;
            }
          }
        }
      }
    }
  }
}
</style>