import axios from 'axios'


const state = {
    moduleIndex: 0,
    literacy: [],
    currentModule: {}
}

const getters = {
    subjModules: (state) => state.literacy
}

const actions = {
    async getSubjectModules({ commit }) {
        const response = await axios.get('https://bootcamp.steamledge.com/gcc/handler.php?literacy')
        // response.data.map(lesson => lesson.introSound = '../sounds/phonics/welcomeToPhoics.mp3')
        commit('getAllSubjModule', response.data)
        console.log(response.data)
    },
    setCurrentModule({ commit }) {
        const currentModule = state.literacy[state.moduleIndex]
        // if (state.literacy) {
        commit('currentModule', currentModule)
        // }
        console.log(state.literacy)
    }
}

const mutations = {
    getAllSubjModule: (state, data) => (state.literacy = data),
    currentModule: (state, data) => (state.currentModule = data)
}



export default {
    state,
    getters,
    actions,
    mutations
}