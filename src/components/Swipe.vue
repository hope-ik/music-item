<template>
  <!-- 轮播图 -->
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#ff7f00">
      <template v-for="(item,index) in imgList">
        <van-swipe-item :key="index.id">
          <img :src="item.src" alt />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      imgList: [
        { id: 1, src: require("../assets/Index/lunbo1.png") },
        { id: 2, src: require("../assets/Index/lunbo1.png") },
        { id: 3, src: require("../assets/Index/lunbo1.png") },
        { id: 4, src: require("../assets/Index/lunbo1.png") },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/swipe");
</style>