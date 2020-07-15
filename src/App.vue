<template>
  <div id="app">
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
// import importedSub from "../data/student";
export default {
  data() {
    return {
      lessons: []
    };
  }
};
</script>
<style>
</style>
