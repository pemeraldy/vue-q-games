<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
// import importedSub from "../data/student";
export default {
  data() {
    return {
      lessons: [],
      userScore: 0,
      subjects: []
    };
  }
};
</script>
<style>
</style>
