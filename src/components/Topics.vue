<template>
  <div class="col-xl-8">
    <div class="card">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">Topics</h3>
          </div>
          <div class="col">
            <select class="form-control">
              <option value="English">English</option>
              <option value="English">Mathematics</option>
              <option value="English">Science</option>
            </select>
          </div>
          <div class="col text-right">
            <a href="#!" class="btn btn-sm btn-primary">See all</a>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-flush">
          <thead class="thead-light">
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Level One</th>
              <td>6 Lessons</td>
              <div @click="playAnim" ref="box" class="box"></div>
              <div class="bubble-wrapper">
                <div @click="playBubble" ref="bubble" class="bubble">
                  <img src="@/assets/img/letters/Ape.png" alt="ape" />
                  <div ref="bubblePulse" class="bubble-pulse"></div>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap";
export default {
  components: {},
  data() {
    return {
      playIt: false
    };
  },
  methods: {
    playAnim: function() {
      const { box } = this.$refs;
      const timeline = new TimelineLite();

      timeline.to(box, 1, { x: 200, rotation: 90, ease: Back.easeOut });
      timeline.to(box, 0.5, { background: "orange" }, "+=2");
    },
    playBubble: function() {
      const { bubble, bubblePulse } = this.$refs;
      const timeline = new TimelineLite();

      timeline.to(bubble, 0.4, {
        scale: 0.8,
        rotation: 16,
        ease: Back.easeOut.config(1.7)
      });
      timeline.to(
        bubblePulse,
        0.5,
        {
          scale: 0.9,
          opacity: 1
        },
        "-=0.6"
      );

      timeline.to(bubble, 1.2, {
        scale: 1,
        rotation: "-=16",
        ease: Elastic.easeOut.config(2.5, 0.5)
      });
      timeline.to(
        bubblePulse,
        1.1,
        {
          scale: 3,
          opacity: 0,
          ease: Expo.easeOut
        },
        "-=1.2"
      );
    }
  },
  mounted() {}
};
</script>

<style scoped>
.box {
  height: 60px;
  width: 60px;
  background: rgb(247, 82, 82);
}
.bubble-wrapper {
  position: relative;
}
.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.bubble img {
  width: 100%;
}
.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
</style>