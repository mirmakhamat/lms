<template>
    <div :class="`blog__box ${type?'mini':''}`">
        <router-link to="/blog" class="blog__link">
            Новая система скидок в Language2GO: успейте забрать максимум!
        </router-link>
        <div class="blog__date">05-06-2022</div>
        <p v-if="!type">Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. </p>
        <div class="blog__bottom">
            <router-link to="/blogs" class="blog__category">Новость</router-link>
            <router-link to="/blog" class="blog__more">
                Подробнее
                <img src="@/assets/icons/arrow-right.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style>

</style>