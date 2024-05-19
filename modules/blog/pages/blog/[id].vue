// modules/blog/pages/blog/[id].vue

<template>
  <section style="padding-top:500px;">
    <p>Blog post with the id: {{ currentRoute.params.id }}</p>
    <BlogPost :blog="blog"/>
    {{ blogStore.setNewValue(1000) }}
    <q-btn label="ADD" @click="blogStore.incValue"></q-btn>
    {{ blogStore.count }}
    <br>
    <span>Current value from blogStore: {{ blogStore.value }}</span>
  </section>
</template>

<script setup lang="ts">
import { useBlog } from '../../composables/useBlog';
import BlogPost from '../../components/BlogPost.vue';
import { useBlogStore } from '../../store/store';
import { useRouter } from 'nuxt/app';

const { currentRoute } = useRouter()
const { blog } = useBlog()
const blogStore = useBlogStore()
</script>