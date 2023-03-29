import { createStore } from "vuex";
const store = createStore({
    state:{
        // return{
        data: [{id: 0, name:'조승우'}]
        // }
    },
    getters:{},
    mutations:{
        getData(state,obj){state.data = obj}
    },
    actions:{
        async getData({commit}){
            const {data:resData} = await useFetch('/api');
            commit('getData', resData._rawValue.work);
        }
    }
});

export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.use(store);
});