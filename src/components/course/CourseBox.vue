<template>
    <div class="course__box">
        <img v-if="course.img" :src="`${url}/${course.img}`" alt="" class="course__flag">
        <router-link to="/" class="course__title">
            {{course.title}}
        </router-link>
        <div class="course__info">Длительность: <b>{{course.time}} часов</b></div>
        <div class="course__info">Модулей: <b>{{course.parts}}</b></div>
        <div class="course__bottom">
            <router-link to="/" class="course__more">
                Узнать подробнее
                <img src="@/assets/icons/arrow-right.png" alt="">
            </router-link>
            <div class="course__price">От {{course.price}} Р</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['course'],
    computed: {
        url(){return this.$store.getters.url}
    }
}
</script>

<style lang="scss">
    @import '@/styles/components/course.scss';
</style>