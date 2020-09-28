<template>
  <div class="login">
    <div class="login_body">
      <template v-if="regflg">
        <div class="title">
          <span>账号密码登陆</span>
        </div>
        <div class="input_box">
          <van-cell-group :border="false">
            <van-field
              label-class="l-input"
              v-model="tel"
              :border="false"
              type="tel"
              label="手机号"
              placeholder="手机号"
              label-width="50px"
            />
            <van-field
              v-model="pwd"
              label="密码"
              type="password"
              placeholder="密码"
              label-width="50px"
            >
              <template #extra>
                <span class="right_text">忘记密码</span>
              </template>
            </van-field>
          </van-cell-group>
          <div class="inp">
            <input type="text" />
          </div>
          <van-button type="primary" class="lg_btn" @click="logUser"
            >登陆</van-button
          >
          <span class="goreg" @click="goBackreg">账号注册</span>
        </div>
      </template>
      <template v-else>
        <div class="title">
          <span>注册账号，体验更多功能</span>
        </div>
        <div class="input_box">
          <van-cell-group :border="false">
            <van-field
              v-model="tel"
              :border="false"
              type="tel"
              label="手机号"
              placeholder="请输入手机号"
              label-width="50px"
            />
            <van-field
              v-model="pwd"
              label="密码"
              type="digit"
              placeholder="请输入密码"
              label-width="50px"
            >
              <template #extra>
                <span class="right_text"></span>
              </template>
            </van-field>
          </van-cell-group>
          <van-button type="primary" class="lg_btn" @click="regUesr"
            >注册</van-button
          >
          <span class="golog" @click="goBackreg">账号登陆</span>
        </div>
      </template>
      <div class="rests_option">
        <van-grid :border="false" :column-num="3" :center="true">
          <van-grid-item>
            <div class="wx_icon"></div>
          </van-grid-item>
          <van-grid-item>
            <div class="qq_icon"></div>
          </van-grid-item>
          <van-grid-item>
            <div class="wb_icon"></div>
          </van-grid-item>
        </van-grid>
        <div class="clause">
          <span>登陆注册即表示同意</span>
          &nbsp;
          <u>服务条款</u>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regflg: true,
      tel: "",
      pwd: "",
    };
  },
  mounted() {
    console
      .log
      // (!~+[] + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]]
      ();
  },
  watch: {},
  methods: {
    goBackreg() {
      this.regflg = !this.regflg;
      this.tel = "";
      this.pwd = "";
    },
    regUesr() {
      if (this.tel == "" || this.pwd == "") {
        Toast({
          message: "请正确输入账号或密码",
          forbidClick: true,
        });
      } else {
        localStorage.setItem(this.tel, this.pwd);
        if (localStorage.getItem(this.tel)) {
          Notify({
            type: "success",
            message: "注册成功!",
            duration: 1000,
          });
          setTimeout(() => {
            this.tel = "";
            this.pwd = "";
            this.regflg = true;
          }, 500);
        }
      }
    },
    logUser() {
      let user = localStorage.getItem(this.tel);
      if (!user || user != this.pwd) {
        Toast({
          message: "账号或密码错误!",
          forbidClick: true,
        });
      } else {
        Toast.success({
          message: "登陆成功!",
          duration: 1000,
          forbidClick: true,
        });
        this.$router.push({
          path: "/",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.inp {
  // border-bottom: solid 1px blueviolet;
  input {
    border: 0;
    border-bottom: solid 1px red;
  }
  input:inp {
  }
}
.login {
  width: 340px;
  height: 650px;
  margin: 0 auto;

  .login_body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-start;
      margin-top: 35px;
      margin-bottom: 35px;
      font-size: 28px;
    }

    .input_box {
      height: 195px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 180px;

      .van-cell {
        padding-left: 0;
        padding-right: 0;
        border-bottom: 1px solid #f8f7f3;
      }
      .van-field__control:van-cell {
        border-bottom: 1px solid red;
      }

      .right_text {
        font-size: 10px;
        color: #8f8f8f;
      }

      .lg_btn {
        border: none;
        background-color: #19ad19;
        color: #ffffff;
        font-size: 15px;
      }

      .goreg {
        display: block;
        color: #7fa4cd;
        font-size: 10px;
      }

      .golog {
        display: block;
        color: #000;
        font-size: 10px;
      }
    }

    .rests_option {
      height: 120px;
      width: 300px;
      display: flex;
      flex-direction: column;

      .wx_icon {
        height: 50px;
        width: 50px;
        border: 1px solid #f4f4f4;
        border-radius: 100px;
        background: url(../../assets/wx.png) no-repeat center;
        background-size: 28px;
      }

      .qq_icon {
        height: 50px;
        width: 50px;
        border: 1px solid #f4f4f4;
        border-radius: 100px;
        background: url(../../assets/qq.png) no-repeat center;
        background-size: 28px;
      }

      .wb_icon {
        height: 50px;
        width: 50px;
        border: 1px solid #f4f4f4;
        border-radius: 100px;
        background: url(../../assets/weibo.png) no-repeat center;
        background-size: 28px;
      }

      .clause {
        margin-top: 10px;
        font-size: 10px;

        span {
          color: #bfbfbf;
        }
      }
    }
  }
  // .login .login_body .input_box .van-cell {
  //   border-bottom: 0.02667rem solid red;
  // }
  // .input_box {
  //   input:focus {
  //     outline: none;
  //     border-bottom: 1px solid #2196f3;
  //   }
  // }
  // .input_box input:focus {
  //   bottom: 30px;
  //   color: #2196f3;
  // }
}
</style>
