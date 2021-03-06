webpackJsonp([9],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(749)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(751)
/* template */
var __vue_template__ = __webpack_require__(752)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\home\\books\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a65877e0", Component.options)
  } else {
    hotAPI.reload("data-v-a65877e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(750);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("23e7e4ff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65877e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65877e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "\n.book-content{\n    padding: 15px;\n}\n.thumbnail-box{\n    padding: 10px;\n}\n.thumbnail {\n      display: block;\n      padding: 4px;\n      margin-bottom: 20px;\n      line-height: 1.42857143;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      -webkit-transition: border .2s ease-in-out;\n      transition: border .2s ease-in-out;\n      height: 300px;\n      color: #495060;\n}\n.thumbnail:hover{\n    color: #495060;\n}\n.thumbnail .img{\n    text-align: center;\n    margin-bottom: 10px;\n}\n.thumbnail img,.thumbnail .img{\n    max-width: 100%;\n    height: 248px;\n}\n.ivu-layout{\n    height: 100%;\n}\n.ivu-layout-sider{\n    background-color: #fff;\n}\n.layout{\n    /* border: 1px solid #d7dde4; */\n    background: #f5f7f9;\n    position: relative;\n    border-radius: 4px;\n    overflow: hidden;\n}\n.layout-logo{\n    width: 100px;\n    height: 30px;\n    background: #5b6270;\n    border-radius: 3px;\n    float: left;\n    position: relative;\n    top: 15px;\n    left: 20px;\n}\n.layout-nav{\n    width: 120px;\n    margin: 0 auto;\n    margin-right: 20px;\n}\n.layout-footer-center{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lists: []
    };
  },

  computed: {},
  mounted: function mounted() {
    this.list(1);
  },

  methods: {
    list: function list(id) {
      var _this = this;

      axios.get("book").then(function (res) {
        _this.lists = res.data.data;
      });
    },
    menuRouter: function menuRouter(name) {
      this.$router.push({
        name: name
      });
    }
  }
});

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    [
      _c(
        "Header",
        [
          _c(
            "Menu",
            {
              attrs: { mode: "horizontal", theme: "dark", "active-name": "1" },
              on: { "on-select": _vm.menuRouter }
            },
            [
              _c("div", { staticClass: "layout-logo" }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "layout-nav" },
                [
                  _c(
                    "MenuItem",
                    { attrs: { name: "admin.home" } },
                    [
                      _c("Icon", { attrs: { type: "ios-navigate" } }),
                      _vm._v("\n                  后台管理\n              ")
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Layout",
        [
          _c("Sider", { attrs: { "hide-trigger": "" } }),
          _vm._v(" "),
          _c(
            "Content",
            { staticClass: "book-content" },
            [
              _c(
                "Row",
                _vm._l(_vm.lists.data, function(item, index) {
                  return _c(
                    "Col",
                    {
                      key: index,
                      staticClass: "thumbnail-box",
                      attrs: { span: "4" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "thumbnail",
                          attrs: {
                            to: {
                              name: "home.documents",
                              query: { id: item.id }
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "img" }, [
                            _c("img", {
                              attrs: { src: "/images/book-default-bg.png" }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(item.name))])
                        ]
                      )
                    ],
                    1
                  )
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("Sider", { attrs: { "hide-trigger": "" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer", { staticClass: "layout-footer-center" }, [
        _vm._v("\n      2018-2018 © LuffyZhao\n    ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a65877e0", module.exports)
  }
}

/***/ })

});