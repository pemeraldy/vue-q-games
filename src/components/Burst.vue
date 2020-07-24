<template>
  <div ref="vuemoElement" v-on:click="replay" class="any-style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      burst: null
    };
  },
  mounted() {
    this.burst = this.$vuemo.Burst({
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
    });
  },
  methods: {
    replay: function() {
      this.burst.replay();
    }
  }
};
</script>

<style>
</style>