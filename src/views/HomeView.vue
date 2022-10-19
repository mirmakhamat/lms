<template>
  <div class="home">
    <WelcomeItem/>
    <CoursesList :courses="courses"/>
    <ForWhom/>
    <WhyUs/>
    <EffectBox/>
    <HowItem/>
    <QuoteList/>
    <RegBox/>
    <BlogList :blogs="blogs"/>
    <FaqList :faq="faq"/>
  </div>
</template>

<script>

import WelcomeItem from '@/components/home/WelcomeItem.vue';
import CoursesList from '@/components/home/CoursesList.vue';
import WhyUs from '@/components/home/WhyUs.vue';
import EffectBox from '../components/home/EffectBox.vue';
import HowItem from '../components/home/HowItem.vue';
import QuoteList from '@/components/home/QuoteList.vue';
import ForWhom from '@/components/home/ForWhom.vue';
import RegBox from '@/components/lib/RegBox.vue';
import BlogList from '@/components/home/BlogList.vue';
import FaqList from '../components/home/FaqList.vue';

export default {
  name: 'HomeView',
  components: {
    WelcomeItem,
    CoursesList,
    WhyUs,
    EffectBox,
    HowItem,
    QuoteList,
    ForWhom,
    RegBox,
    BlogList,
    FaqList
  },
  computed:{
    courses(){
        return this.$store.getters.courses
    },
    blogs(){
        return this.$store.getters.blogs
    },
    faq(){
      return this.$store.getters.faqLast
    }
  }
}
</script>
