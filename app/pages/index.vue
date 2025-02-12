<script setup lang="ts">
const { data: posts, refresh } = await useFetch<PostResponse[]>("/api/posts");
</script>

<template>
  <PostForm @submit="refresh" />

  <PostCard
    v-for="post in posts"
    :key="post._id"
    :_id="post._id"
    :name="post.name"
    :text="post.text"
    :parent="post.parent"
    :createdAt="post.createdAt"
  />
</template>
