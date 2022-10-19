<template>
    <div class="container">
        <div class="row">
            <div class="col-4 col-md-12">
                <h2 class="mb-30">
                    Отвечаем на частые вопросы
                </h2>
                <button class="btn mb-60">
                    Задать вопрос
                </button>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="@/assets/img/faq.png" alt="">
                </div>
            </div>
            <div class="col-8 col-md-12">
                <FaqItem v-for="item of faq" :key="item._id" :faq="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import FaqItem from '../lib/FaqItem.vue';
export default {
    components: { FaqItem },
    props:['faq']
}
</script>

<style lang="scss">
@import '@/styles/components/faq.scss';
</style>