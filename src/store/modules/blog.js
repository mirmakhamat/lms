import axios from "axios"

const blog = {
    state: () => ({
        blogs: [],
        blog: {},
        otherBlogs: []
    }),
    getters: {
        blogs(state){
            return state.blogs
        },
        blog(state){
            return state.blog
        },
        lastblogs(state){
            return state.blogs.slice(0, 3)
        },
        otherBlogs(state){
            return state.otherBlogs
        }
    },
    mutations:{
        blogs(state, payload){
            state.blogs = payload
        },
        blog(state, payload){
            state.blog = payload
        },
        otherBlogs(state, payload){
            state.otherBlogs = payload
        }
    },
    actions: {
        getAllBlogs(context){
            axios.get(`${context.getters.url}/blog/getall`)
            .then(res => {
                if(res.status === 200){
                    context.commit('blogs', res.data)
                }
            })
        },
        getBlog(context, payload){
            axios.get(`${context.getters.url}/blog/view/${payload}`)
            .then(res => {
                if(res.status === 200){
                    let {others, blog} = res.data
                    context.commit('otherBlogs', others)
                    context.commit('blog', blog)
                }
            })
        }
    }
}

export default blog