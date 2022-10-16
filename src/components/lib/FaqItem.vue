<template>
    <div :class="`faq__box ${toggle?'open':''}`">
        <div @click="toggle = !toggle" class="faq__head">
            <h4 class="faq__title">
                {{faq.question}}
            </h4>
            <div class="faq__status"></div>
        </div>
        <div class="faq__body">
            {{faq.answer}}
        </div>

    </div>
</template>

<script>
export default {
    props: ['faq'],
    data() {
        return {
            toggle: false
        }
    },
}
</script>

<style>

</style>