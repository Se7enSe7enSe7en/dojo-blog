<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        console.log(props);
        console.log(props.posts);
    }
}
</script>

<style>

</style>