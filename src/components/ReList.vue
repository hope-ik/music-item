<template>
  <div class="ReList">
    <div class="play-title">
      <span class="play-list">推荐榜单</span>
      <span class="more">
        更多
        <img src="../assets/Index/rigth.png" alt />
      </span>
    </div>
    <div class="box">
      <div class="relist-box">
        <img src="../assets/Index/bof.png" alt />
      </div>
      <template>
        <div class="relist-right" @touchstart="start" @touchmove="move" @touchend="end">
          <van-image
            v-for="item in list"
            :key="item.id"
            :src="item.src"
            :class="['itemshow animate__animated']"
            :style="{position: 'absolute', }"
            ref="itemshow"
          ></van-image>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
// import F2 from "@antv/f2";

export default {
  data() {
    return {
      list: [
        { id: 1, src: require("../assets/Index/valot_paihang2.png") },
        { id: 2, src: require("../assets/Index/valot_paihang.png") },
        { id: 3, src: require("../assets/Index/valot_paihang3.png") },
        { id: 4, src: require("../assets/Index/valot_paihang4.png") },
      ],
      handleX: 0,
      changX: 0,
    };
  },
  methods: {
    start(e) {
      //手指触摸到的Client的X
      // console.log(e.changedTouches[0].clientX);

      this.handleX = e.changedTouches[0];
      console.log("手指触摸clientX=" + this.handleX.clientX);
    },
    move(e) {
      //手指进行滑动中
      // console.log(e);
    },
    end(e) {
      //手指滑动松开位置
      const end = e.changedTouches[0];
      console.log("手指触摸松开" + end.clientX);
      // console.log(this.handleX.clientX - end.clientX);
      if (this.handleX.clientX - end.clientX > 20) {
        this.goLeft();
      }
    },

    goLeft() {
      const beforeIndex = this.changX == 0 ? 5 : this.changX - 1;
      const nextIndex = this.changX == 4 ? 0 : this.changX + 1;
      const id = this.list.id;
      // console.log(beforeIndex, nextIndex);
      //使用$refs找到ref子组件注册的类,添加翻页动画
      this.$refs.itemshow[this.changX].$el.classList
        .add
        // "animate__bounceInLeft"
        // "show" + 1
        ();
      // console.log(this.$refs.itemshow[this.changX].$el);

      this.changX = nextIndex;
      console.log(this.changX);

      //把第一项存起来
      const firstItem = this.list[0];
      //把第一项删除
      this.list.splice(0, 1);
      console.log(this.list, this.list.length, firstItem);
      this.$set(this.list, this.list.length, firstItem);
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../commom/components/ReList.less");
</style>