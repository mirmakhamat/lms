<template>
    <div class="whom">
        <img src="@/assets/icons/chat.png" alt="" class="whom__chat">
        <div class="container">
            <div class="row">
                <div class="col-4 col-md-12">
                    <h2 class="mb-30">
                        Кому подойдет <span>L2GO</span>
                    </h2>
                    <p class="mb-40">
                        Language to go подойдет всем, кто хочет за короткий срок качественно изменить свою жизнь, освоив иностранный язык.
                    </p>
                    <button class="btn">Попробовать бесплатно</button>
                </div>
                <div class="col-8 col-md-12">
                    <div class="row">
                        <div class="col-6 col-sm-12" v-for="el, i of whom" :key="i">
                            <div class="whom__box">
                                <img :src="require(`@/assets/icons/whom${i+1}.png`)" alt="">
                                <div class="whom__title">
                                    {{el.t}}
                                </div>
                                <p>
                                    {{el.d}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            whom: [
                {t:'Школьникам',d:"Сдать выпускные экзамены или поступить в ВУЗ."},
                {t:'Студентам',d:"Переехать на обучение в другую страну или найти высокооплачеваемую работу"},
                {t:'Эмигрантам',d:"Адаптироваться в новой стране, создать конкурентное преимущество и трудоустроиться"},
                {t:'Общительным',d:"Создать счастливую семью с иностранцем и интегрироваться в новое общество"},
                {t:'Бизнесменам',d:"Завести полезные знакомства среди иностранцев и масштабировать бизнес"},
                {t:'Путешественникам',d:"Свободно общаться и находить новых друзей, решать бытовые вопросы и спорные ситуации"},
            ]
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/components/home/forwhom.scss';
</style>