/**
 * 该文件用于创建vuex中最核心的store
 */

//引入Vuex
import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const actions = {}

const mutations = {}

const state = {
    PageSize: 5
}


//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
});







