import Vue from 'vue'
import { TEST_COUNT } from './mutation-types'

const actions = {
    getCountAdd({ commit }, data) {
        commit(TEST_COUNT, data)
    }
}

const getters = {
    count: state => {
        return state.count
    }
}

const initState = {
    count: 0
}

const mutations = {
    [TEST_COUNT](state, data) {
        Vue.set(state, 'count', data)
    }
}

export default {
    state: initState,
    mutations,
    actions,
    getters
}
