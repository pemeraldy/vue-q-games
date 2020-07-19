// import axios from 'axios'


const state = {
    subjects: [
        {
            name: 'English',
            moduleIndex: 1,
            module: "Phonics",
            topic: 'Vowels',
            introVoice: require("../../assets/sounds/phonics/welcomeToPhonics.mp3"),
            header:
                "In this lesson, we will be learning vowels and the sounds they make.",
            anims: ["A", "E"]
        },
        {
            name: 'English',
            moduleIndex: 2,
            module: "Consonants",
            topic: 'Consonants',
            introVoice: require("../../assets/sounds/phonics/level-1-phonics.mp3"),
            header:
                "In this lesson, we will be learning Consonant letters and the sounds they make.",
            anims: ["k", "M"]

        }
    ]
}

const getters = {
    allSubjects: (state) => state.subjects
}

const actions = {}

const mutations = {}



export default {
    state,
    getters,
    actions,
    mutations
}