<script setup>

import Swal from "sweetalert2";
import {Head} from '@inertiajs/vue3';

defineProps({
    article: Object,
    comments: Object,

    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },


});
</script>

<template>

    <Head :title="article.title"/>

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            <a
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >Dashboard
            </a>

            <template v-else>
                <a :href="route('login')"
                   class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Log in
                </a>

                <a
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Register
                </a>
            </template>
        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">

            <div class="flex">
                <img style="width: 250px;" :src="article.image" alt="">
            </div>

            <div class="mt-2">
                <div class="grid blog-detail">

                    <h1> {{ article.title }}</h1>
                    <p> {{ article.article }}</p>
                    <div class="blog-date">{{ article.created_at }}</div>
                    <div class="blog-publisher">{{ article.nameSurname }}</div>
                    <span>{{ article.keywords }}</span>
                </div>
            </div>


            <div class="comments">
                <h3>Comments</h3>
                <div class="commentsInsert">
                    <textarea v-model="comment" aria-label="" name="comment" id="comment"></textarea>
                    <br>
                    <button @click="commentInsert()" class="button">Insert</button>
                </div>

                <ul id="commentul" v-for="(comment, key) in comments" :key="comment.id">
                    <li>
                        <h3>{{ comment.user.name + ' ' + comment.user.surname }}
                            <span :style="{'font-weight': 300}" v-if="comment.user.auth_type == 1">Administrator</span>
                            <span :style="{'font-weight': 300}" v-if="comment.user.auth_type == 2">Editor</span>
                        </h3>
                        <span>{{ comment.created_at }}</span>
                        <p>{{ comment.comment }}</p>
                        <div :style="{'cursor':'pointer'}" @click="deleteComment(comment.id,key)" style="color: red;">
                            Delete
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment: null,
        }
    },
    methods: {
        commentInsert: function () {
            if (this.comment == null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Comment field left blank!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                axios.post('/comment', {
                    comment: this.comment,
                    blog_id: this.article.id,
                }).then((response) => {
                    this.comments.unshift(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Comments Added!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            }

        },

        deleteComment: function (id, key) {
            axios.delete('/comment/' + id).then((response) => {
                this.comments.splice(key, 1);
                Swal.fire({
                    icon: 'success',
                    title: 'Comments Deleted!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => function () {
                Swal.fire({
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        }
    },

}
</script>


