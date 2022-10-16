<template>
    <div class="course__box">
        <img src="@/assets/img/german.png" alt="" class="course__flag">
        <router-link to="/" class="course__title">
            Немецкий для начального уровня
        </router-link>
        <div class="course__info">Длительность: <b>45 часов</b></div>
        <div class="course__info">Модулей: <b>3</b></div>
        <div class="course__bottom">
            <router-link to="/" class="course__more">
                Узнать подробнее
                <img src="@/assets/icons/arrow-right.png" alt="">
            </router-link>
            <div class="course__price">От 6 520 Р</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '@/styles/components/course.scss';
</style>