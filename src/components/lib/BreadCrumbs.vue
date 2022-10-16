<template>
    <ul class="breadcrumbs">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/">Курсы</router-link></li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/lib/colors.scss';
.breadcrumbs {
    display: flex;
    align-items: center;
    margin: 30px 0;
    a {
        color: $purple;
        text-decoration: underline;
        display: flex;
        align-items: center;
        font-family: 'regular';
    }
    li {
        display: flex;
        align-items: center;
        &::after {
            content: '';
            width: 24px;
            height: 24px;
            background-image: url('@/assets/icons/right.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            display: inline-block;
        }
        &:last-child {
            &:after {
                    content: unset;
                }
            a {
                color: #828282;
                text-decoration: none;
            }
        }
    }
}
</style>