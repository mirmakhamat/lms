import axios from "axios"

const faq = {
    state: ()=>({
        faq:[],
        faqLast:[]
    }),
    getters:{
        faq(state){
            return state.faq
        },
        faqLast(state){
            return state.faqLast
        }
    },
    mutations:{
        faq(state, payload){
            state.faq = payload
        },
        faqLast(state, payload){
            state.faqLast = payload
        }
    },
    actions: {
        getAllFaq(context){
            axios.get(`${context.getters.url}/faq/all`)
            .then(res=>{
                if(res.status===200){
                    context.commit('faq', res.data)
                }
            })
        },
        getLastFaq(context){
            axios.get(`${context.getters.url}/faq/last`)
            .then(res=>{
                if(res.status===200){
                    context.commit('faqLast', res.data)
                }
            })
        }
    }
}

export default faq