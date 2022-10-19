import { createStore } from 'vuex'

import course from './modules/course'
import category from './modules/category'
import blog from './modules/blog'
import faq from './modules/faq'

export default createStore({
  state: {
    url: 'http://localhost:3003'
  },
  getters: {
    url(state){
      return state.url
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    course, category, blog, faq
  }
})
