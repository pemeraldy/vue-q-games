<template>
  <nav
    id="navbar-main"
    class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
  >
    <div class="container">
      <nav-link class="navbar-brand" to="/">
        <!-- <img src="../assets/img/brand/white.png" /> -->
        GCC
      </nav-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse"
        aria-controls="navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a >
                <!-- <img src="../assets/img/brand/blue.png" /> -->
                GCC
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav mr-auto"></ul>
        <hr class="d-lg-none" />
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <button class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <i class="fas fa-user mr-2"></i>
              </span>
              <span class="nav-link-inner--text">Admin</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {};
</script>

<style>
</style>