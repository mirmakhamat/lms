<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <div class="row">
                <div class="col-8 col-md-12">
                <h1 class="mb-30">Блог <div class="text-purple">Language to go</div></h1>
                <p class="text mb-30">
                    Будьте в курсе наших событий. Следите за нашими новостями
                </p>
                <div class="courses__category">
                    <button class="active">Все</button>
                    <button>Новости</button>
                    <button>Статьи</button>
                    <button>Интересное</button>
                </div>
                    <div class="row">
                        <div class="col-12">
                            <BlogItem/>
                        </div>
                        <div class="col-6 col-md-12">
                            <BlogItem/>
                        </div>
                        <div class="col-6 col-md-12">
                            <BlogItem/>
                        </div>
                        <div class="col-6 col-md-12">
                            <BlogItem/>
                        </div>
                        <div class="col-6 col-md-12">
                            <BlogItem/>
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
    components: { BreadCrumbs, BlogItem }
}
</script>

<style>

</style>