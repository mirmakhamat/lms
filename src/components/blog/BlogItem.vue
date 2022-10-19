<template>
    <div :class="`blog__box ${type?'mini':''}`">
        <router-link :to="`/blog/${blog._id}`" class="blog__link">
            {{blog.title}}
        </router-link>
        <div class="blog__date">{{getDate(blog.createdAt)}}</div>
        <p v-if="!type">{{blog.text}} </p>
        <div class="blog__bottom">
            <router-link to="/blogs" class="blog__category">Новость</router-link>
            <router-link :to="`/blog/${blog._id}`" class="blog__more">
                Подробнее
                <img src="@/assets/icons/arrow-right.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'blog'],
    methods: {
        getDate(d){
            if(d){
                let t = new Date(d)
                return `${t.getDate()}-${t.getMonth()+1}-${t.getFullYear()}`
            }
        }
    },
}
</script>

<style>

</style>