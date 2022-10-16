<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-60">
            <div class="col-6 col-md-12">
                <h2>Курсы иностранных языков для любого уровня</h2>
            </div>
            <button class="btn outline">
                Все курсы
            </button>
        </div>
        <Splide
            :options="{
                type:'loop',
                perPage:3,
                autoplay:true,
                arrows:false,
                gap:40
            }"
            class="courses__slide mb-100"
        >
            <SplideSlide>
                <CourseBox/>
            </SplideSlide>
            <SplideSlide>
                <CourseBox/>
            </SplideSlide>
            <SplideSlide>
                <CourseBox/>
            </SplideSlide>
            <SplideSlide>
                <CourseBox/>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import CourseBox from '../course/CourseBox.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    components: { CourseBox, Splide, SplideSlide }
}
</script>

<style>

</style>