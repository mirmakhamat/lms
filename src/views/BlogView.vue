<template>
    <div class="courses mb-100">
        <div class="container">
            <BreadCrumbs/>
            <div class="row">
                <div class="col-8 col-md-12">
                    <h1 class="mb-30">Новая система скидок в Language2GO: успейте забрать максимум!</h1>
                    <div class="text-blue mt-30 mb-30">
                        05-06-2022
                    </div>
                    <div class="blog__text mb-30">
                        <p>Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. Именно поэтому мы предлагаем нашим клиентам не только бесплатные пробные уроки, но и гибкую систему скидок, которая позволит существенно снизить затраты.</p>
                        <p>Начните с выбора оптимальной программы обучения: бесплатное тестирование определит ваш уровень знаний и предложит лучший вариант для быстрого прогресса. Следующий шаг — активация купона и приятное изменение стоимости курса в меньшую сторону.</p>
                        <p>Купоны на скидку можно найти в соцсетях Language2GO, получить в рассылке для лояльных клиентов или в приобрести в подарок для ваших близких, а бесплатные уроки ждут всех желающих на нашем сайте!</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-30">
                        <router-link to="/blog" class="blog__category">Новость</router-link>
                        <div class="blog__social">
                            Поделиться
                            <a href="#" target="_blank"><img src="@/assets/icons/fb.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/yt.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/tw.svg" alt=""></a>
                            <a href="#" target="_blank"><img src="@/assets/icons/vk.svg" alt=""></a>
                        </div>
                    </div>
                    <hr class="mb-50">
                    <div class="d-flex align-items-center justify-content-between mb-40">
                        <h4>Другие новости</h4>
                        <router-link to="/" class="btn outline">Все новости</router-link>
                    </div>
                    <div class="row">
                        <div class="col-12"><BlogItem type='true'/></div>
                        <div class="col-12"><BlogItem type='true'/></div>
                        <div class="col-12"><BlogItem type='true'/></div>
                    </div>
                </div>
                <div class="col-4 col-md-12">
                    <div class="sticky">
                        <img src="@/assets/img/blog.png" alt="" class="full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/lib/BreadCrumbs.vue';
import BlogItem from '@/components/blog/BlogItem.vue';
export default {
    components: { BreadCrumbs, BlogItem }
}
</script>

<style>

</style>