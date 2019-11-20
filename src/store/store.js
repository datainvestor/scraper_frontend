import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        movies : [],
        pickedList: []
    },
    getters: {
        movies: state => {
            return state.movies
        },
        pickedList: state => {
            return state.pickedList
        }
    },
    mutations: {
        mutateArray: (state, payload) => {
            state.movies = payload
        },
        addPick: (state, pick) => {
            state.pickedList.push(pick)
        },
        mutatePick: (state, payload) => {
            state.pickedList = payload
        }
    },
    actions: {
        updateArray({commit}, payload ){
            commit('mutateArray', payload)
         },
        updateList({commit}, payload) {
            commit("addPick", payload)
        },
        resetList({commit}, payload){
            commit("mutatePick", payload)
        }
    }
})