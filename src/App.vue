<template>
  <HeaderItem/>
  <router-view/>
  <FooterItem/>
</template>

<script>
import HeaderItem from './components/lib/HeaderItem.vue'
import FooterItem from './components/lib/FooterItem.vue'
export default {
  components: {
    HeaderItem,
    FooterItem
  },
  mounted() {
      this.$store.dispatch('getAllCourses')
      this.$store.dispatch('getAllBlogs')
      this.$store.dispatch('getAllFaq')
      this.$store.dispatch('getLastFaq')
  },
}
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css';
@import '@/styles/app.scss';
</style>
