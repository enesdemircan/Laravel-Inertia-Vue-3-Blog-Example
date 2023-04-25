<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';

defineProps({
    my_articles: {}
});
</script>

<template>
    <Head title="My Article"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">My Articles</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <div style="margin-top: 10px;" v-for="(article, key, index) in my_articles" :key="article.id">
                        <div class="article-item" style="display: flex">
                            <div
                                :style="{'background':'url('+article.image+')','background-size':'100%','background-position':'center','background-repeat':'no-repeat','width':'120px','height':'120px'}"></div>
                            <div style="    margin-left: 10px;width: 74%;">
                                <h1> {{ article.title }}</h1>
                                <p> {{ article.desc }}</p>
                            </div>
                            <div style="    height: 20px;
    margin-top: 4px;
    margin-left: 50px;">
                                <a :href="route('article.edit',article.id)" style="color: green;" class="delete">
                                    Edit
                                </a>
                                <button style="color: red; margin-left:6px" v-on:click="remove(key,article.id)"
                                        class="delete">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<script>
import Swal from "sweetalert2";

export default {

    data() {

    },
    methods: {
        remove(key, id) {
            axios.delete('article/' + id)
                .then((response) => {
                    this.my_articles.splice(key, 1);
                    Swal.fire({
                        icon: 'success',
                        title: 'Article Delete!',
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
    }
}
</script>
<style>
.article-item {
    background-color: #f8f8f8;
    padding: 10px;
    margin-bottom: 10px;
}

.article-item h1 {
    font-weight: bold;
    font-size: 20px;
}

.article-item p {
}

.article-item span {
}
</style>
