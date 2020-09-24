<template>
  <!-- 音乐圈 子路由 -->
  <div class="desansisbar">
    <div class="desansisbar-box">
      <ul class>
        <li v-for="(item,index) in list" :key="index">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: "附近", path: "nearby" },
        { title: "推荐", path: "recommendation" },
        { title: "关注", path: "attention" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.desansisbar {
  width: 100%;
  height: 100%;
  .desansisbar-box {
    margin: 0 auto;
    width: 100%;
    height: 111px;
    position: fixed;
    z-index: 998;
    background: #00ceff;
    top: 0px;
    border-radius: 50%;
    ul {
      width: 100%;
      height: 100%;
      position: relative;
      top: 65px;
      left: 94px;
      li {
        float: left;
        position: relative;
        left: 25px;
        margin-right: 25px;
        a {
          font-size: 15px;
          color: white;
        }
      }
    }
  }
  a.router-link-exact-active {
    font-size: 17px !important;
    font-weight: bold;
  }
  a.router-link-exact-active::after {
    position: absolute;
    bottom: -5px;
    right: -6px;
    width: 45px;
    height: 1.06667rem;
    background-size: contain;
    transition: background 0.3s ease-in;
    content: "";
    border-bottom: solid 3px #ffb100;
  }
  //   a.router-link-active {
  //     font-size: 17px !important;
  //     font-weight: bold;
  //   }
  .box {
    width: 100%;
    height: 200px;
    position: relative;
    top: 100px;
  }
}
</style>
