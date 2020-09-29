<template>
  <div class="PlayPage">
    <div class="bg">
      <!-- 头部 -->
      <div class="title-box">
        <img @click="back" class="leftBack" src="../../assets/PlayPage/left.png" alt />
        <div class="title">
          <ul>
            <li>第六感</li>
            <li>Reol</li>
          </ul>
        </div>
        <img class="rightshare" src="../../assets/PlayPage/share.png" alt />
      </div>
      <!-- 播放唱片 -->
      <div class="record-box">
        <div class="song-turn">
          <img src="../../assets/PlayPage/liu.png" alt />
        </div>
        
      </div>
      <!-- 播放模块 -->
      <div class="voice-box">
        <img class="voice-img" src="../../assets/PlayPage/voice.png" alt />
        <!-- 进度条组件 -->
        <progress-bar></progress-bar>
        <div class="playBtn">
          <img src="../../assets/PlayPage/sys.png" alt />
          <img @click="state" v-if="playState" src="../../assets/PlayPage/bof.png" alt />
          <img @click="zant" v-if="!playState" src="../../assets/PlayPage/zantingH.png" alt="">
          <img src="../../assets/PlayPage/xys.png" alt />
        </div>
        <div class="operateBtn">
          <div>
            <img class="dqxh" src="../../assets/PlayPage/dqxh.png" alt />
          </div>
          <div>
            <img class="aix" src="../../assets/PlayPage/aix.png" alt />
          </div>
          <div>
            <img class="xz" src="../../assets/PlayPage/xz.png" alt />
          </div>
          <div>
            <img class="pl" src="../../assets/PlayPage/pl.png" alt />
          </div>
          <div>
            <img class="menu" src="../../assets/PlayPage/menu.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Progress } from "vant";
Vue.use(Progress);

import ProgressBar from "../../components/PlayPage/ProgressBar.vue";
export default {
  data(){
    return{
      // 开始按钮
    playState:true,
    musicList:[
      {
        title:"第六感",
        name:"Reol",
        img:require('../../assets/PlayPage/liu.png'),
        src:''
      }
    ]
    }
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    state(){
      this.playState=false
    },
    zant(){
      this.playState=true
    }

  },
  components: {
    ProgressBar,
  },
};
</script>
<style lang="less" scoped>
@import url("../../commom/components/PlayPage/PlayPage");
</style>