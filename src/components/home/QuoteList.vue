<template>
    <div class="quote">
        <div class="container">
            <div class="d-flex align-items-end justify-content-between mb-60">
                <div class="col-6 col-md-12">
                    <h2>Что говорят о нас ученики?</h2>
                </div>
                <button class="btn outline">
                    Все отзывы
                </button>
            </div>
            <div class="row">
                <div class="col-6 col-md-12 pos">
                    <img src="@/assets/img/quote.png" alt="">
                    <div class="qoute__item"></div>
                </div>
                <div class="col-6 col-md-12">
                    <Splide :options="{type: 'loop', perPage:1, autoplay:true, arrows:false}">
                        <SplideSlide>
                            <div class="quote__box">
                                <div class="quote__head">
                                    <div class="quote__left">
                                        <div class="quote__name">Артем М.</div>
                                        <div class="quote__lvl">Студент</div>
                                    </div>
                                    <div class="quote__rate">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                    </div>
                                </div>
                                <div class="quote__body">
                                    Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. 
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="quote__box">
                                <div class="quote__head">
                                    <div class="quote__left">
                                        <div class="quote__name">Артем М.</div>
                                        <div class="quote__lvl">Студент</div>
                                    </div>
                                    <div class="quote__rate">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                    </div>
                                </div>
                                <div class="quote__body">
                                    Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. 
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="quote__box">
                                <div class="quote__head">
                                    <div class="quote__left">
                                        <div class="quote__name">Артем М.</div>
                                        <div class="quote__lvl">Студент</div>
                                    </div>
                                    <div class="quote__rate">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                        <img src="@/assets/img/Star.png" alt="">
                                    </div>
                                </div>
                                <div class="quote__body">
                                    Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. 
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    components: {
        Splide,
        SplideSlide,
    }
}
</script>

<style lang="scss">
@import '@/styles/components/home/quotelist.scss';

</style>