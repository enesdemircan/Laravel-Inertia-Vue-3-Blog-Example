<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {useForm, router, Head} from '@inertiajs/vue3';
import Swal from 'sweetalert2'


const form = useForm({
    title: '',
    desc: '',
    image: '',
    article: '',
    keywords: '',
});
const submit = () => {
    console.log(form.image);


    form.post(route('article.store'), {
        onSuccess: function () {
            Swal.fire({
                icon: 'success',
                title: 'Article Added!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

};


</script>

<template>
    <Head title="My Articles"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Article Insert</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <header>
                        <h2 class="text-lg font-medium text-gray-900">Article</h2>

                        <p class="mt-1 text-sm text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </header>
                    <br>
                    <form @submit.prevent="submit" enctype="multipart/form-data">

                        <div>
                            <InputLabel for="title" value="Title"/>

                            <TextInput
                                id="title"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.title"
                                required
                                autofocus
                                autocomplete="title"
                            />

                            <InputError class="mt-2" :message="form.errors.title"/>
                        </div>

                        <div>
                            <InputLabel for="desc" value="Description"/>

                            <TextInput
                                id="desc"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.desc"
                                required
                                autofocus
                                autocomplete="desc"
                            />

                            <InputError class="mt-2" :message="form.errors.desc"/>
                        </div>
                        <div class="mt-4">
                            <InputLabel for="image" value="Image"/>

                            <input
                                id="image"
                                type="file"
                                class="mt-1 block w-full"
                                required
                                autocomplete="image"
                                @input="form.image = $event.target.files[0]"
                            />
                            <InputError class="mt-2" :message="form.errors.image"/>
                        </div>

                        <div class="mt-4">
                            <InputLabel for="article" value="Article Detail"/>

                            <textarea
                                id="article"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.article"
                                required
                                autocomplete="article"
                            />

                            <InputError class="mt-2" :message="form.errors.article"/>
                        </div>

                        <div class="mt-4">
                            <InputLabel for="keywords" value="Keywords"/>

                            <TextInput
                                id="keywords"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.keywords"
                                required
                                autocomplete="keywords"
                            />

                            <InputError class="mt-2" :message="form.errors.keywords"/>
                        </div>

                        <div class="flex items-center justify-end mt-4">


                            <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                           :disabled="form.processing">
                                Article Insert
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
</template>



