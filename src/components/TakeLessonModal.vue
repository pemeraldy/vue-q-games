<template>
  <!-- Modal -->
  <div
    class="modal fade lesson-modal"
    id="takeLessonModal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    role="dialog"
    aria-labelledby="takeLessonModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="takeLessonModalLabel">...</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3 class="mt-4 ml-3 text-white" @click="tisClicked">Phonics</h3>
          <p class="text-white ml-3 animate__animated animate__fadeInUp">Lesson 1 - Letter Sounds</p>
          <div class="lessonContent">
            <div
              v-for="anim in allSubjects[0].anims"
              :key="anim"
              class="card anims animate__animated animate__bounce animate__delay-2s"
            >
              <audio v-bind:src="allSubjects[0].introVoice" ref="animAudio" />
              <span @click="playAudio">{{anim}}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- data-dismiss="modal" -->
          <button type="button" class="btn btn-secondary">Previous</button>
          <button type="button" class="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // moduleIntro: this.allSubjects[0].introVoice
    };
  },
  methods: {
    ...mapActions([""]),
    tisClicked() {
      console.log(this.allSubjects);
    },
    playAudio() {
      let audio = new Audio(this.allSubjects[0].introVoice);
      audio.load();
      audio.currentTime = 0;
      audio.play();
    }
  },
  computed: mapGetters(["allSubjects"])
};
</script>

<style scoped>
.modal-content {
  width: 800px !important;
  height: 80vh !important;
  right: 60px;
  background-image: url("../assets/lessonsBg.png");
  background-size: cover;
}
.lessonContent {
  padding: 20px;
  color: orange;
  display: flex;
  justify-content: center;
}
.lessonContent .card.anims {
  margin: 10px;
}
.lessonContent span {
  font-size: 30px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid orange;
  text-align: center;
  border-radius: 4px;
  /* background-color: purple; */
}
</style>