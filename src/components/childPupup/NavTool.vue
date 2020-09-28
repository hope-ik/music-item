<template>
  <div>
    <van-row type="flex" justify="space-around" class="main">
      <van-col span="4" v-for="(item, index) in tools" :key="index">
        <i class="iconfont" :class="item.svg"></i>
        <p>{{item.message}}</p>
      </van-col>
    </van-row>
    <van-divider class="divider" />
  </div>
</template>

<script>
import { Row, Col } from "vant";
import { Divider } from "vant";

export default {
  name: "NavTool",
  data() {
    return {
      tools: [
        { svg: "icon-xinfeng", message: "我的消息" },
        { svg: "icon-wode", message: "我的好友" },
        { svg: "icon-micfuben", message: "听歌识曲" },
        { svg: "icon-pifu", message: "个性装扮" }
      ]
    };
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Divider.name]: Divider
  }
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.svg-tool {
  font-family: "iconfont";
  font-style: normal;
}
.my-style {
  font-size: 20px;
  font-weight: 500;
}
.main {
  text-align: center;
  margin-top: 15px;
  padding: 0 10px;
}
.main i {
  font-size: 25px;
  color: #c30f18;
}
.main p {
  font-size: 12px;
  color: rgb(148, 148, 148);
}
.divider {
  padding: 0 15px;
  /* margin-bottom: 0; */
}
</style>
