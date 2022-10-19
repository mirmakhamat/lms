import axios from "axios"

const category = {
    state: () => ({
        categories: [],
        category: {}
    }),
    getters: {
        categories(state){
            return state.categories
        },
        category(state){
            return state.category
        }
    },
    mutations:{
        categories(state, payload){
            state.categories = payload
        }
    },
    actions: {
        getAllCategories(context){
            axios.get(`${context.getters.url}/category/catall`)
            .then(res => {
                if(res.status === 200){
                    context.commit('categories', res.data)
                }
            })
        }
    }
}

export default category