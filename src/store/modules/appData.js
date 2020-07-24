import axios from 'axios'


const state = {
    moduleIndex: 0,
    literacy: [],
    currentModule: null
}

const getters = {
    subjModules: (state) => state.literacy,
    setCurrentModule: (state) => state.currentModule
}

const actions = {
    async getSubjectModules({ commit }) {
        const response = await axios.get('https://bootcamp.steamledge.com/gcc/handler.php?literacy')
        // response.data.map(lesson => lesson.introSound = '../sounds/phonics/welcomeToPhoics.mp3')
        commit('getAllSubjModule', response.data)
        console.log(response.data)
    },
    async setCurrentModule({ commit }, id) {
        const response = await axios.get(`https://bootcamp.steamledge.com/gcc/handler.php?id=${id}`)
        // response.data.map(lesson => lesson.introSound = '../sounds/phonics/welcomeToPhoics.mp3')
        commit('currentModule', response.data)
        console.log('Current Module', response.data)
        // }
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