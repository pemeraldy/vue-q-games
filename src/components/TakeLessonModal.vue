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
          <h3 class="mt-4 ml-3 text-white">Phonics</h3>
          <p class="text-white ml-3 animate__animated animate__fadeInUp">Lesson 1 - Letter Sounds</p>
          <div class="lessonContent">
            <span
              v-for="letter in currentModule"
              ref="content"
              @click="letterSound(`${letter.content}`)"
              :key="letter.id"
              class="card anims"
            >
              <Burst>{{letter.content}}</Burst>
            </span>
          </div>
        </div>
        <div class="modal-footer">
          <!-- data-dismiss="modal" -->
          <button
            ref="vuemoElement"
            v-on:click="replay"
            type="button"
            class="btn btn-secondary"
          >Previous</button>
          <button ref="anotherBurst" v-on:click="replay2" type="button" class="btn btn-primary">Next</button>
        </div>
        <div class="img-narrator"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { TimelineLite } from "gsap";
import Burst from "./Burst";
// import BurstTwo from "./BurstTwo";

export default {
  props: ["content"],
  components: {
    Burst
    // BurstTwo
  },
  data() {
    return {
      allPhonics: [],
      burst: null,
      burst2: null
      // moduleIntro: this.allSubjects[0].introVoice
    };
  },
  methods: {
    ...mapActions(["setCurrentModule"]),
    letterSound(src) {
      if (src) {
        let audio = new Audio(
          require(`../assets/sounds/phonics/lettersounds/${src}.mp3`)
        );
        audio.currentTime = 0;
        audio.play();
      }
      // this.getSubjectModules();
      this.contentAnimate();
      console.log(src);
    },
    contentAnimate() {},
    contentStagger() {
      const timeline = new TimelineLite();
      timeline.from(".card.anims", {
        duration: 1,
        backgroundColor: "orange",
        opacity: 0.6,
        y: -200,
        stagger: 0.35
      });
    },
    replay: function() {
      this.burst.replay();
    },
    replay2: function() {
      this.burst2.replay();
    },
    setTopic: function() {}
  },
  created() {
    console.log(this.currentModule);
  },
  computed: {
    ...mapGetters(["currentModule"])
  },

  mounted() {
    console.log(this.currentModule);
    this.setCurrentModule("L1/PH/LS"),
      (this.burst = this.$vuemo.Burst({
        parent: this.$refs.vuemoElement,
        radius: { 25: 75 },
        count: 10,
        duration: 2000,
        children: {
          shape: ["circle", "polygon"],
          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
          angle: { 0: 180 },
          degreeShift: "rand(-360, 360)",
          delay: "stagger(0, 25)"
        }
      }));
    this.burst2 = this.$vuemo.Burst({
      parent: this.$refs.anotherBurst,
      radius: { 25: 75 },
      count: 10,
      duration: 2000,
      children: {
        shape: ["circle", "polygon"],
        fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
        angle: { 0: 180 },
        degreeShift: "rand(-360, 360)",
        delay: "stagger(0, 25)"
      }
    });
    this.contentStagger();
  }
};
</script>

<style scoped>
.modal-content {
  width: 900px !important;
  height: 80vh !important;
  right: 60px;
  background-image: url("../assets/lessonsBg.png");
  background-size: cover !important;
}
.lessonContent {
  width: 732px;
  margin-left: 12px;
  padding: 10px;
  color: orange;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 4px;
  row-gap: 4px;
}
.lessonContent .card.anims {
  margin: 10px;
}
.lessonContent span {
  font-size: 30px;
  display: inline-block;
  border: 2px solid orange;
  text-align: center;
  border-radius: 4px;
}
.modal-footer {
  position: relative;
  top: -49px;
}

/* testing 101 */
.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style>