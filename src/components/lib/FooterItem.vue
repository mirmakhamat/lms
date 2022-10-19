<template>
    <footer class="footer">
        <div class="container d-flex justify-content-between">
            <div class="footer__box">
                <img src="@/assets/img/flogo.png" alt="" class="logo mb-30">
                <p class="mb-40">Language2Go — интерактивная платформа для легкого, удобного и быстрого изучения иностранных языков.</p>
                <div class="d-flex align-items-center footer__social">
                    <img src="@/assets/img/visa.png" alt="">
                    <img src="@/assets/img/mastercard.png" alt="">
                    <img src="@/assets/img/mir.png" alt="">
                </div>
            </div>
            <div class="footer__box">
                <div class="footer__title">
                    Обучение
                </div>
                <ul>
                    <li><router-link to="/">Все языки</router-link></li>
                    <li><router-link to="/">Взрослым</router-link></li>
                    <li><router-link to="/">Детям и подросткам</router-link></li>
                    <li><router-link to="/">Мини-курсы</router-link></li>
                    <li><router-link to="/">Тренажеры</router-link></li>
                    <li><router-link to="/">Индивидуальные занятия</router-link></li>
                </ul>
            </div>
            <div class="footer__box">
                <div class="footer__title">
                    Информация
                </div>
                <ul>
                    <li><router-link to="/">О нас</router-link></li>
                    <li><router-link to="/">Отзывы</router-link></li>
                    <li><router-link to="/">Новости</router-link></li>
                    <li><router-link to="/">Частые вопросы</router-link></li>
                    <li><router-link to="/">Условия оплаты</router-link></li>
                    <li><router-link to="/">Контакты</router-link></li>
                </ul>
            </div>
            <div class="footer__box">
                <div class="footer__title">
                    Контакты
                </div>
                <div class="footer__contact">+7 (495) 156-35-50</div>
                <div class="footer__mail">
                    <a href="mailto:info@language2go.ru">info@language2go.ru</a>
                    <a href="mailto:support@language2go.ru">support@language2go.ru</a>
                </div>
                <div class="footer__address">101000, Москва, Россия</div>
                <div class="d-flex align-items-center footer__social">
                    <a href="#" target="_blank"><img src="@/assets/icons/facebook.png" alt=""></a>
                    <a href="#" target="_blank"><img src="@/assets/icons/youtube.png" alt=""></a>
                    <a href="#" target="_blank"><img src="@/assets/icons/vk.png" alt=""></a>
                    <a href="#" target="_blank"><img src="@/assets/icons/twitter.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="footer__copy">
            <div class="container d-flex justify-content-between">
                <span>© 2022 Language to go</span>
                <ul>
                    <li><router-link to="/">Правовая оговорка</router-link></li>
                    <li><router-link to="/">Пользовательское соглашение</router-link></li>
                    <li><router-link to="/">Политика конфиденциальности</router-link></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/components/footer.scss';
</style>