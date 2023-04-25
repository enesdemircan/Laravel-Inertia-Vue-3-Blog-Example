import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-69c06d51.mjs";
import { Head } from "@inertiajs/vue3";
import Swal from "sweetalert2";
import "./ApplicationLogo-8b847249.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const ArticleList_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
  },
  methods: {
    remove(key, id) {
      axios.delete("article/" + id).then((response) => {
        this.my_articles.splice(key, 1);
        Swal.fire({
          icon: "success",
          title: "Article Delete!",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => function() {
        Swal.fire({
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ArticleList",
  __ssrInlineRender: true,
  props: {
    my_articles: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "My Article" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>My Articles</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "My Articles")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}><!--[-->`);
            ssrRenderList(__props.my_articles, (article, key, index) => {
              _push2(`<div style="${ssrRenderStyle({ "margin-top": "10px" })}"${_scopeId}><div class="article-item" style="${ssrRenderStyle({ "display": "flex" })}"${_scopeId}><div style="${ssrRenderStyle({ "background": "url(" + article.image + ")", "background-size": "100%", "background-position": "center", "background-repeat": "no-repeat", "width": "120px", "height": "120px" })}"${_scopeId}></div><div style="${ssrRenderStyle({ "margin-left": "10px", "width": "74%" })}"${_scopeId}><h1${_scopeId}>${ssrInterpolate(article.title)}</h1><p${_scopeId}>${ssrInterpolate(article.desc)}</p></div><div style="${ssrRenderStyle({ "height": "20px", "margin-top": "4px", "margin-left": "50px" })}"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("article.edit", article.id))} style="${ssrRenderStyle({ "color": "green" })}" class="delete"${_scopeId}> Edit </a><button style="${ssrRenderStyle({ "color": "red", "margin-left": "6px" })}" class="delete"${_scopeId}> Delete </button></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.my_articles, (article, key, index) => {
                      return openBlock(), createBlock("div", {
                        style: { "margin-top": "10px" },
                        key: article.id
                      }, [
                        createVNode("div", {
                          class: "article-item",
                          style: { "display": "flex" }
                        }, [
                          createVNode("div", {
                            style: { "background": "url(" + article.image + ")", "background-size": "100%", "background-position": "center", "background-repeat": "no-repeat", "width": "120px", "height": "120px" }
                          }, null, 4),
                          createVNode("div", { style: { "margin-left": "10px", "width": "74%" } }, [
                            createVNode("h1", null, toDisplayString(article.title), 1),
                            createVNode("p", null, toDisplayString(article.desc), 1)
                          ]),
                          createVNode("div", { style: { "height": "20px", "margin-top": "4px", "margin-left": "50px" } }, [
                            createVNode("a", {
                              href: _ctx.route("article.edit", article.id),
                              style: { "color": "green" },
                              class: "delete"
                            }, " Edit ", 8, ["href"]),
                            createVNode("button", {
                              style: { "color": "red", "margin-left": "6px" },
                              onClick: ($event) => _ctx.remove(key, article.id),
                              class: "delete"
                            }, " Delete ", 8, ["onClick"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ArticleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
