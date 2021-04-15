<template>
  <div class="home">
    <h1>Home4</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../../components/PostList'
import { ref } from 'vue'

export default {
    name: 'Home4',
    components: { PostList },
    setup() {
        const posts = ref([
            { title: 'welcome to the blog', body: 'Officia occaecat officia et magna dolore sit. Esse duis reprehenderit occaecat occaecat sint. Culpa eu voluptate cupidatat sit ullamco est culpa non veniam aliquip eu tempor qui ipsum. Cupidatat laboris ex labore et id. Non mollit veniam incididunt eu deserunt culpa velit minim non officia fugiat minim.', id: 1 },
            { title: 'top 5 CSS tips', body: 'Commodo nisi ullamco labore quis officia elit pariatur aliquip ullamco et esse dolore exercitation. Ad duis reprehenderit exercitation velit quis. Esse velit ex id eiusmod nisi proident occaecat eu culpa. In eu anim consequat aliquip pariatur anim labore ullamco. Laboris excepteur est nulla sint laborum qui aliquip veniam elit sit est.', id: 2 },
        ])

        return { posts }
    }
}
</script>

<style>

</style>