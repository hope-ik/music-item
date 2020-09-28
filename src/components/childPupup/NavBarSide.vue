<template>
  <div class="side">
    <div class="login">
      <div class="user-login">
        <p>登录网易云音乐</p>
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <van-row type="flex" justify="center">
          <van-col span="12">
            <van-button
              round
              class="btn"
              type="default"
              size="large"
              @click="loginClick"
              color="rgb(148, 148, 148)"
              block
              plain
            >
              点击登录</van-button
            >
          </van-col>
        </van-row>
      </div>
      <van-popup
        v-model="isShow"
        position="bottim"
        :style="{ height: '100%', width: '100%' }"
      />
    </div>
    <nav-tool />
    <side-main />
  </div>
</template>

<script>
import { loginStatu } from "../../network/login";

import NavTool from "./NavTool";
import SideMain from "./SideMain";

export default {
  name: "NavBarSide",
  data() {
    return {
      phone: "",
      password: "",
      loginInfo: {},
      isShow: false,
    };
  },
  props: {},
  components: {
    NavTool,
    SideMain,
  },
  created() {
    loginStatu().then((res) => {
      console.log(res);
    });
  },
  methods: {
    loginClick() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.login {
  width: 100%;
  color: rgb(148, 148, 148);
}
.btn {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
}
.user-login {
  height: 20vh;
  width: 100%;
  background-color: rgb(245, 245, 245);
  padding-top: 35px;
  text-align: center;
}

.user-login p {
  font-size: 14px;
  padding: 5px 0;
}
</style>
