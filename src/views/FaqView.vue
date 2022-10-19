<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <h1 class="mb-30">FAQ</h1>
            <p class="text mb-30">Часто задаваемые вопросы</p>
            <div class="courses__category">
                <button class="active">Все</button>
                <button>Вопросы об обучении</button>
                <button>Вопросы о покупке</button>
            </div>
            <FaqItem v-for="item of faq" :key="item._id" :faq="item"/>
            <div class="effect mt-100 faq">
            <div class="row align-items-center">
                <div class="col-6 col-md-12 d-flex align-items-center justify-content-center">
                    <img src="@/assets/img/faq.png" alt="">
                </div>
                <div class="col-6 col-md-12">
                    <h2 class="mb-20">
                        Мы всегда рады помочь!
                    </h2>
                    <p class="text mb-40">
                        Свяжитесь с нашей командой поддержки студентов по любым вопросам.
                    </p>
                    <button class="btn">Задать вопрос</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/lib/BreadCrumbs.vue';
import FaqItem from '@/components/lib/FaqItem.vue';
export default {
    components: { BreadCrumbs, FaqItem },
    computed:{
        faq(){
            return this.$store.getters.faq
        }
    }
}
</script>

<style>

</style>