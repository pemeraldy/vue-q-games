<template>
  <div class="admin">
    <div class="main-content" id="panel">
      <AdminNav />
      <!-- Header -->
      <div class="header bg-primary pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-7">
                <form
                  class="navbar-search navbar-search-light form-inline mr-sm-3"
                  id="navbar-search-main"
                >
                  <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-search"></i>
                        </span>
                      </div>
                      <input class="form-control" placeholder="Search" type="text" />
                    </div>
                  </div>
                  <button
                    type="button"
                    class="close"
                    data-action="search-close"
                    data-target="#navbar-search-main"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </form>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a
                  href="#"
                  class="btn btn-sm btn-neutral"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >Add Student</a>
                <!-- <a href="#" class="btn btn-sm btn-neutral">Filters</a> -->
              </div>
            </div>
            <!-- <div class="row align-items-center py-4">
              <div class="col text-center">
                <a href="#" class="btn btn-sm btn-neutral">Export excel</a>
                <a href="#" class="btn btn-sm btn-neutral">Export PDF</a>
              </div>
            </div>-->
            <!-- Card stats -->
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <StudentsTable />
              </div>
              <!-- <div class="col-xl-4"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddStudentModal />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminNav from "../components/AdminNav";
import StudentsTable from "../components/StudentsTable";
import AddStudentModal from "../components/AddStudentModal";

export default {
  name: "Admin",
  components: {
    AdminNav,
    StudentsTable,
    AddStudentModal
  }
};
</script>
<style scoped>
.admin {
  background: url("../assets/bg2.png");
  height: 100vh;
}
</style>