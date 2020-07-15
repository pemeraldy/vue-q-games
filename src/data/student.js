// export default [{ "level": "LEVEL 1", "sub_module": "PHONICS", "module_id": "Letter Sounds" }, { "level": "LEVEL 1", "sub_module": "PHONICS", "module_id": "Consonants and Vowels" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Two Letter Words" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Four Letter Words" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Five Letter Words" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Six Letter Word" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Seven Letter Words" }, { "level": "LEVEL 1", "sub_module": "SPELLING", "module_id": "Eight Letter Words" }, { "level": "LEVEL 1", "sub_module": "READING", "module_id": "The Cat and the Mouse" }, { "level": "LEVEL 1", "sub_module": "VOCABULARY", "module_id": "Words and Meaning" }]
// const lessons = 
// end point of english/modules/module1...
export default

    [
        {
            name: 'English',
            moduleIndex: 1,
            module: "Phonics",
            topic: 'Vowels',
            introVoice: require("../assets/sounds/phonics/welcomeToPhonics.mp3"),
            header:
                "In this lesson, we will be learning vowels and the sounds they make.",
            anim1: "A",
            anim2: "E"
        },
        {
            name: 'English',
            moduleIndex: 2,
            module: "Consonants",
            topic: 'Consonants',
            introVoice: require("../assets/sounds/phonics/level-1-phonics.mp3"),
            header:
                "In this lesson, we will be Consonant letters and the sounds they make.",
            anim1: "k",
            anim2: "M"
        }

    ]


// console.log(lessons)