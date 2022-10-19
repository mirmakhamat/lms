import axios from "axios"

const course = {
    state: () => ({
        courses: [],
        course: {}
    }),
    getters: {
        courses(state){
            return state.courses
        },
        course(state){
            return state.course
        }
    },
    mutations:{
        courses(state, payload){
            state.courses = payload
        }
    },
    actions: {
        getAllCourses(context){
            axios.get(`${context.getters.url}/product/getall`)
            .then(res => {
                if(res.status === 200){
                    context.commit('courses', res.data)
                }
            })
        },
        filterCourses(context, payload){
            axios.get(`${context.getters.url}/product/getbycat/${payload}`)
            .then(res => {
                if(res.status === 200){
                    context.commit('courses', res.data)
                }
            })
        }
    }
}

export default course