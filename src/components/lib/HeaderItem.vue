<template>
    <header class="header">
        <router-link to="/" class="logo">
            <img src="@/assets/img/logo.png" alt="">
        </router-link>
        <ul class="header__menu">
            <li><router-link to="/courses">Курсы</router-link></li>
            <li><router-link to="/">О нас</router-link></li>
            <li><router-link to="/blogs">Блог</router-link></li>
            <li>
                <span>Еще</span>
                <ul class="header__dropdown">
                    <li><router-link to="/faq">FAQ</router-link></li>
                    <li><router-link to="/">Контакты</router-link></li>
                    <li><router-link to="/">Условия оплаты</router-link></li>
                </ul>
            </li>
        </ul>
        <button class="btn">Войти</button>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '@/styles/components/header.scss'
</style>