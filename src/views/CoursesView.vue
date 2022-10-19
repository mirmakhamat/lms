<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <h1 class="mb-30">Курсы</h1>
            <div class="courses__category">
                <button 
                    @click="filterCategories(null)"
                    :class="{'active':!activeBtn}">
                    Все
                </button>
                <button
                    v-for="category of categories"
                    :key="category._id"
                    :class="{'active':category._id == activeBtn}"
                    @click="filterCategories(category._id)">
                    {{category.name}}
                </button>
            </div>
            <div class="row">
                <div class="col-9 col-md-12">
                    <div class="row">
                        <div class="col-6 col-md-12" v-for="course of courses" :key="course._id">
                            <CourseBox :course="course"/>
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
    data() {
        return {
            activeBtn:null
        }
    },
    components: { BreadCrumbs, CourseBox },
    computed:{
        categories(){
            return this.$store.getters.categories
        },
        courses(){
            return this.$store.getters.courses
        }
    },
    methods: {
        filterCategories(catId){
            this.activeBtn = catId
            if(catId)
                this.$store.dispatch('filterCourses', catId)
            else
                this.$store.dispatch('getAllCourses')
        }
    },
    mounted() {
        this.$store.dispatch('getAllCategories')
    },
}
</script>

<style>

</style>