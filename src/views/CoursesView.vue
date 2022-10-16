<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <h1 class="mb-30">Курсы</h1>
            <div class="courses__category">
                <button class="active">Все</button>
                <button>Китайский</button>
                <button>Английский</button>
                <button>Немецкий</button>
                <button>Испанский</button>
            </div>
            <div class="row">
                <div class="col-9 col-md-12">
                    <div class="row">
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                        <div class="col-6 col-md-12">
                            <CourseBox/>
                        </div>
                    </div>
                </div>
                <div class="col-3 col-md-12">
                    <div class="sticky">
                        <div class="courses__filter">
                            <div class="courses__filter--title">
                                Уровень
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check1" checked>
                                <label for="check1">
                                    Начальный
                                </label>
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check2">
                                <label for="check2">
                                    Средний
                                </label>
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check3">
                                <label for="check3">
                                    Высокий
                                </label>
                            </div>
                        </div>
                        <div class="courses__filter">
                            <div class="courses__filter--title">
                                Для каких целей
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check1" checked>
                                <label for="check1">
                                    Школа
                                </label>
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check2">
                                <label for="check2">
                                    Студенты
                                </label>
                            </div>
                            <div class="courses__checkbox">
                                <input type="checkbox" id="check3">
                                <label for="check3">
                                    Эмигрантам
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/lib/BreadCrumbs.vue';
import CourseBox from '@/components/course/CourseBox.vue';
export default {
    components: { BreadCrumbs, CourseBox }
}
</script>

<style>

</style>