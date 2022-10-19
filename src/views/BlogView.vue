<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <div class="row">
                <div class="col-8 col-md-12">
                    <h1 class="mb-30">{{blog.title}}</h1>
                    <div class="text-blue mt-30 mb-30">
                        {{getDate(blog.createdAt)}}
                    </div>
                    <img v-if="blog.img" :src="`${url}/${blog.img}`" alt="" class="full mb-20">
                    <div class="blog__text mb-30">
                        <p>{{blog.text}}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-30">
                        <router-link to="/blogs" class="blog__category">Новость</router-link>
                        <div class="blog__social">
                            Поделиться
                            <a href="#" target="_blank"><img src="@/assets/icons/fb.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/yt.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/tw.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/vk.svg" alt=""></a>
                        </div>
                    </div>
                    <hr class="mb-50">
                    <div class="d-flex align-items-center justify-content-between mb-40">
                        <h4>Другие новости</h4>
                        <router-link to="/blogs" class="btn outline">Все новости</router-link>
                    </div>
                    <div class="row">
                        <div 
                            class="col-12"
                            v-for="blog of otherBlogs" 
                            :key="blog._id">
                            <BlogItem type='true' :blog="blog"/>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-12">
                    <div class="sticky">
                        <img src="@/assets/img/blog.png" alt="" class="full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/lib/BreadCrumbs.vue';
import BlogItem from '@/components/blog/BlogItem.vue';
export default {
    data() {
        return {
            id:0,
        }
    },
    components: { 
        BreadCrumbs, 
        BlogItem 
    },
    methods: {
        getDate(d){
            if(d){
                let t = new Date(d)
                return `${t.getDate()}-${t.getMonth()+1}-${t.getFullYear()}`
            }
        }
    },
    watch:{
        $route(to){
            window.scrollTo(0,0)
            this.$store.dispatch('getBlog', to.params.id)
        }
    },
    computed: {
        blog(){return this.$store.getters.blog},
        url(){return this.$store.getters.url},
        otherBlogs(){return this.$store.getters.otherBlogs}
    },
    mounted() {
        window.scrollTo(0,0)
        this.id = this.$route.params.id
        this.$store.dispatch('getBlog', this.id)
    },
}
</script>

<style>

</style>