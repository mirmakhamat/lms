<template>
  <div class="home">
    <WelcomeItem/>
    <CoursesList/>
    <ForWhom/>
    <WhyUs/>
    <EffectBox/>
    <HowItem/>
    <QuoteList/>
    <RegBox/>
    <BlogList/>
    <FaqList/>
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
}
}
</script>
