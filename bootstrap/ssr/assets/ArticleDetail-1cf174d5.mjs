import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/vue3";
const __default__ = {
  data() {
    return {
      comment: null
    };
  },
  methods: {
    commentInsert: function() {
      if (this.comment == null) {
        Swal.fire({
          icon: "error",
          title: "Comment field left blank!",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        axios.post("/comment", {
          comment: this.comment,
          blog_id: this.article.id
        }).then((response) => {
          this.comments.unshift(response.data);
          Swal.fire({
            icon: "success",
            title: "Comments Added!",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    },
    deleteComment: function(id, key) {
      axios.delete("/comment/" + id).then((response) => {
        this.comments.splice(key, 1);
        Swal.fire({
          icon: "success",
          title: "Comments Deleted!",
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
  __name: "ArticleDetail",
  __ssrInlineRender: true,
  props: {
    article: Object,
    comments: Object,
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.article.title
      }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">`);
        if (_ctx.$page.props.auth.user) {
          _push(`<a${ssrRenderAttr("href", _ctx.route("dashboard"))} class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard </a>`);
        } else {
          _push(`<!--[--><a${ssrRenderAttr("href", _ctx.route("login"))} class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in </a>`);
          if (__props.canRegister) {
            _push(`<a${ssrRenderAttr("href", _ctx.route("register"))} class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex"><img style="${ssrRenderStyle({ "width": "250px" })}"${ssrRenderAttr("src", __props.article.image)} alt=""></div><div class="mt-2"><div class="grid blog-detail"><h1>${ssrInterpolate(__props.article.title)}</h1><p>${ssrInterpolate(__props.article.article)}</p><div class="blog-date">${ssrInterpolate(__props.article.created_at)}</div><div class="blog-publisher">${ssrInterpolate(__props.article.nameSurname)}</div><span>${ssrInterpolate(__props.article.keywords)}</span></div></div><div class="comments"><h3>Comments</h3><div class="commentsInsert"><textarea aria-label="" name="comment" id="comment">${ssrInterpolate(_ctx.comment)}</textarea><br><button class="button">Insert</button></div><!--[-->`);
      ssrRenderList(__props.comments, (comment, key) => {
        _push(`<ul id="commentul"><li><h3>${ssrInterpolate(comment.user.name + " " + comment.user.surname)} `);
        if (comment.user.auth_type == 1) {
          _push(`<span style="${ssrRenderStyle({ "font-weight": 300 })}">Administrator</span>`);
        } else {
          _push(`<!---->`);
        }
        if (comment.user.auth_type == 2) {
          _push(`<span style="${ssrRenderStyle({ "font-weight": 300 })}">Editor</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><span>${ssrInterpolate(comment.created_at)}</span><p>${ssrInterpolate(comment.comment)}</p><div style="${ssrRenderStyle([{ "cursor": "pointer" }, { "color": "red" }])}"> Delete </div></li></ul>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ArticleDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
