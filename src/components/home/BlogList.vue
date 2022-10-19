<template>
    <div class="container">
        <div class="d-flex align-items-end justify-content-between mb-60">
            <div class="col-6 col-md-12">
                <h2>Полезные новости и статьи</h2>
            </div>
            <div class="col-6 col-md-12 d-flex justify-content-end">
                <button class="btn outline">Все новости</button>
            </div>
        </div>
        <div class="row mb-100">
            <div 
                class="col-4 col-md-12" 
                v-for="blog of blogs"
                :key="blog._id"
                >
                <BlogItem :blog="blog"/>
            </div>
        </div>
    </div>
</template>

<script>
import BlogItem from '../blog/BlogItem.vue';
export default {
    components: { BlogItem },
    props:['blogs']
}
</script>

<style lang="scss">
@import '@/styles/components/blog.scss';
</style>