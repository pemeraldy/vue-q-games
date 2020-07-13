<template>
  <div>
    <!-- Sidebar Nav here -->
    <!-- Sidebar Nav Ends -->
    <div class="main-content" id="panel">
      <!-- Top Nav Here -->
      <TopNav />
      <!-- Header contents -->
      <DashboardHeader />
      <div class="container-fluid mt--6">
        <!-- main page Contents Go here -->
        <div class="row">
          <div class="col-xl-8"></div>
          <div class="col-xl-4"></div>
        </div>
        <div class="row">
          <div class="col-xl-8"></div>
          <div class="col-xl-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../TopNav";
import DashboardHeader from "../DashboardHeader";
export default {
  components: {
    TopNav,
    DashboardHeader
  }
};
</script>

<style>
</style>