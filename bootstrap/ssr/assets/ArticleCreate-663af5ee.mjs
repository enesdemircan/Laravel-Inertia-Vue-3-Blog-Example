import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-69c06d51.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-27676015.mjs";
import { P as PrimaryButton } from "./PrimaryButton-272e1e06.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import Swal from "sweetalert2";
import "./ApplicationLogo-8b847249.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "ArticleCreate",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title: "",
      desc: "",
      image: "",
      article: "",
      keywords: ""
    });
    const submit = () => {
      console.log(form.image);
      form.post(route("article.store"), {
        onSuccess: function() {
          Swal.fire({
            icon: "success",
            title: "Article Added!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "My Articles" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Article Insert</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Article Insert")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}><header${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}>Article</h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></header><br${_scopeId}><form enctype="multipart/form-data"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "title",
              value: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "title",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              required: "",
              autofocus: "",
              autocomplete: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "desc",
              value: "Description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "desc",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).desc,
              "onUpdate:modelValue": ($event) => unref(form).desc = $event,
              required: "",
              autofocus: "",
              autocomplete: "desc"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.desc
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "image",
              value: "Image"
            }, null, _parent2, _scopeId));
            _push2(`<input id="image" type="file" class="mt-1 block w-full" required autocomplete="image"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.image
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "article",
              value: "Article Detail"
            }, null, _parent2, _scopeId));
            _push2(`<textarea id="article" type="text" class="mt-1 block w-full" required autocomplete="article"${_scopeId}>${ssrInterpolate(unref(form).article)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.article
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "keywords",
              value: "Keywords"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "keywords",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).keywords,
              "onUpdate:modelValue": ($event) => unref(form).keywords = $event,
              required: "",
              autocomplete: "keywords"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.keywords
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Article Insert `);
                } else {
                  return [
                    createTextVNode(" Article Insert ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode("header", null, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Article"),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")
                    ]),
                    createVNode("br"),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "title",
                          value: "Title"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "title",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "title"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.title
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "desc",
                          value: "Description"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "desc",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).desc,
                          "onUpdate:modelValue": ($event) => unref(form).desc = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "desc"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.desc
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$2, {
                          for: "image",
                          value: "Image"
                        }),
                        createVNode("input", {
                          id: "image",
                          type: "file",
                          class: "mt-1 block w-full",
                          required: "",
                          autocomplete: "image",
                          onInput: ($event) => unref(form).image = $event.target.files[0]
                        }, null, 40, ["onInput"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.image
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$2, {
                          for: "article",
                          value: "Article Detail"
                        }),
                        withDirectives(createVNode("textarea", {
                          id: "article",
                          type: "text",
                          class: "mt-1 block w-full",
                          "onUpdate:modelValue": ($event) => unref(form).article = $event,
                          required: "",
                          autocomplete: "article"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).article]
                        ]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.article
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$2, {
                          for: "keywords",
                          value: "Keywords"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "keywords",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).keywords,
                          "onUpdate:modelValue": ($event) => unref(form).keywords = $event,
                          required: "",
                          autocomplete: "keywords"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.keywords
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                        createVNode(PrimaryButton, {
                          class: ["ml-4", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Article Insert ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ArticleCreate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
