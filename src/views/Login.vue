<template>
  <div class="login">
    <LoginNav />
    <!-- Main content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header mb-3 py-7 py-lg-4 pt-lg-5">
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Welcome</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary border-0 mb-0">
              <div class="card-header bg-transparent pb-2">
                <div class="text-muted text-center">
                  <h3>Sign in with to start learning</h3>
                </div>
              </div>
              <div class="card-body px-lg-5 py-lg-5">
                <form role="form">
                  <div class="form-group mb-3">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input class="form-control" placeholder="Name" type="text" />
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input class="form-control" placeholder="IDP N0" type="text" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="ni ni-lock-circle-open"></i>
                        </span>
                      </div>
                      <input class="form-control" placeholder="Password" type="password" />
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary my-4">
                      <router-link to="/contents" class="text-white">Sign in</router-link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 text-center">
                <a href="#" class="text-light">
                  <small>Forgot password?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <!-- <LoginFooter /> -->
  </div>
</template>

<script>
import LoginNav from "../components/LoginNav";
// import LoginFooter from "../components/LoginFooter";
export default {
  components: {
    LoginNav
    // LoginFooter
  }
};
</script>
<style scoped>
div.login {
  background: url("../assets/bg1.jpg");
  height: 100vh;
}
router-link {
  color: #fff !important;
}
</style>