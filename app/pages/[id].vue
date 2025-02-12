<script setup lang="ts">
const route = useRoute();
const { data: post, refresh } = await useFetch<PostResponse>(
  `/api/posts/${route.params.id.toString()}`
);
</script>

<template>
  <PostCard
    v-if="post"
    :_id="post._id"
    :name="post.name"
    :text="post.text"
    :parent="post.parent"
    :createdAt="post.createdAt"
  />
  <PostForm @submit="refresh" :parentId="post._id" />
</template>
