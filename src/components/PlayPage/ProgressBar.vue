<template>
  <!--播放页 音乐播放条 -->
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.progress-bar {
  width: 355px;
  height: 26px;

  .bar-inner {
    position: relative;
    top: 13px;
    height: 2px;
    background: white;
  }
  .progress {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #be99ff, #7232dd);
  }
  .progress-btn-wrapper {
    position: absolute;
    left: -8px;
    top: -13px;
    width: 30px;
    height: 30px;
  }
  .progress-btn {
    position: relative;
    top: 7px;
    left: 7px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 3px solid #00ccff;
    border-radius: 50%;
    background: linear-gradient(to right, #be99ff, #7232dd);
  }
}
</style>