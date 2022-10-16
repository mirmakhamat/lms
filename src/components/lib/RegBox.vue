<template>
    <div class="container">
        <div class="reg mb-100">
            <div class="row">
                <div class="col-6 col-md-12">
                    <h2 class="mb-40">
                        Регистрируйтесь и приступайте к первому бесплатному уроку
                    </h2>
                    <form class="reg__form">
                        <div class="reg__row">
                            <div class="reg__input">
                                <span>Телефон *</span>
                                <input type="text" placeholder="+7 (___) ___-__-__">
                            </div>
                            <button class="btn">Начать обучение</button>
                        </div>
                        <input type="checkbox" id="agree">
                        <label for="agree" class="reg__checkbox">
                            <p>Отправляя заявку, я соглашаюсь с <router-link to="/">политикой конфиденциальности</router-link> и <router-link to="/">пользовательским соглашением</router-link></p>
                        </label>
                    </form>
                </div>
                <div class="col-6 col-md-12 d-flex align-items-center justify-content-center">
                    <img src="@/assets/img/reg.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/components/regbox.scss';
</style>