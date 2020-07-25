<template>
  <div class="col-xl-4">
    <div class="card">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">Lessons {{}}</h3>
          </div>
          <div class="col text-right">
            <a href="#!" class="btn btn-sm btn-success">See all</a>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <div class="col">
          <div class="lessons">
            <div class="module-header">
              <hr />
              <h2>
                <span
                  @click="gameSound"
                  data-target="#takeLessonModal"
                  data-toggle="modal"
                  class="badge badge-primary"
                >Phonics</span>
              </h2>
              <hr />
              <div class="module-lessons">
                <p
                  @click="lessonIntro(lesson.dir, lesson.unify_id)"
                  v-for="(lesson, index) in subjModules"
                  :key="lesson.unify_id"
                  data-target="#takeLessonModal"
                  data-toggle="modal"
                  class="leading"
                >Lessons {{index + 1}}: {{lesson.sub_module}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*Data*/
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      audioSrc: ""
    };
  },
  components: {},

  methods: {
    lessonIntro(src, lessonId) {
      if (src) {
        let audio = new Audio(require(`../assets/sounds/phonics/${src}`));
        audio.currentTime = 0;
        audio.play();
      }
      this.setCurrentModule(lessonId);
      this.getSubjectModules();
      console.log(src);
    },
    gameSound() {
      const src = "welcomeToPhonics.mp3";
      let audio = new Audio(require(`../assets/sounds/phonics/${src}`));
      audio.currentTime = 0;
      audio.play();
    },
    ...mapActions(["getSubjectModules", "setCurrentModule"])
  },
  computed: {
    ...mapGetters(["subjModules"])
  },
  mounted() {}
};
</script>

<style scoped>
hr {
  padding: 0;
  margin: 0 !important;
}
</style>