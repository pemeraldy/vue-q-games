<template>
  <div class="header bg-primary pb-6">
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h2 class="text-white d-inline-block mb-0">Lessons</h2>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <!-- <a href="#"> -->
                  <i class="fas fa-book"></i>
                  <!-- </a> -->
                </li>
                <li class="breadcrumb-item">
                  <span>{{subjects.name}}</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{subjects.module}}</li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-6 col-5 text-right">
            <a href="#" class="btn btn-sm btn-neutral">
              Level
              <span>1</span>
            </a>
            <a href="#" class="btn btn-sm btn-neutral">
              Points :
              <span>200</span>
            </a>
          </div>
        </div>
        <!-- Card stats -->
        <div class="row">
          <div class="col-xl-12 col-md-12">
            <div class="card card-stats">
              <!-- Card body -->

              <div class="card-body lesson-subjects">
                <audio>
                  <source v-bind:src="subjects.introVoice" />
                  <!-- <source v-bind:src="subjects.introVoice" /> -->
                </audio>
                <div class="row">
                  <div class="col-auto">
                    <div class="icon icon-shape bg-gradient-success text-white">
                      <i class="ni ni-active-40"></i>
                    </div>
                  </div>
                  <div class="col-auto narration">
                    <h2 v-on:click="playSound">{{subjects.header}}</h2>
                  </div>
                  <div class="col-auto ml-auto">
                    <h1 class="text-orange text-right">{{subjects.module}}</h1>
                  </div>
                  <div class="col-12 mt-3 d-flex">
                    <div class="card d-flex special-characters">
                      <div class="anim anim-one bg-gradient-success">{{subjects.anim1}}</div>
                      <div class="anim anim-two bg-gradient-success">{{subjects.anim2}}</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-right">
                    <button
                      @click="prevModule"
                      class="btn btn-lg bg-gradient-blue text-white"
                    >Previous Module</button>
                    <button
                      @click="nextModule"
                      class="btn btn-lg bg-gradient-blue text-white"
                    >Next Module</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import importedSub from "../data/student";
// import {Howl, Howler} from 'howler';
export default {
  data() {
    return {
      index: 0,
      subjects: []
    };
  },
  methods: {
    playSound: function() {
      let audio = new Audio(
        require("../assets/sounds/phonics/level-1-phonics.mp3")
      );
      audio.play();
    },
    nextModule: function() {
      console.log(this.index, importedSub.length);
      if (this.index < importedSub.length - 1) {
        this.index++;
        console.log("Next", this.index);
      }
    },
    prevModule: function() {
      if (this.index > 0) {
        this.index--;
        console.log(this.index);
      }
      console.log(this.index);
    }
  },
  mounted: function() {
    this.playSound();
    console.log(importedSub);
    if (importedSub) {
      console.log("imported", importedSub[0].name);
      this.subjects = importedSub[this.index];
      console.log("name", this.subjects);
    }
    // console.log(this.subjects[0].english);
  },
  watch: {
    index: function() {
      this.subjects = importedSub[this.index];
    }
  }
};
</script>

<style scoped>
.anim {
  text-align: center;
  width: 200px;
  height: 200px;
  color: white;
  padding: 20px;
  font-size: 100px;
  margin: 4px;
  border: 2px solid white;
}
.special-characters {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.card.lesson-subjects {
  /* width: 600px !important; */
}
</style>