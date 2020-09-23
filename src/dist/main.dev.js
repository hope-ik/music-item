"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("amfe-flexible");

require("normalize.css");

var _vant = _interopRequireDefault(require("vant"));

require("vant/lib/index.css");

var _animate = _interopRequireDefault(require("animate.css"));

var _less = _interopRequireDefault(require("less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//适配rem
_vue["default"].use(_animate["default"]);

_vue["default"].use(_less["default"]); // import stylus from "stylus"
// Vue.use(stylus)


_vue["default"].use(_vant["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');