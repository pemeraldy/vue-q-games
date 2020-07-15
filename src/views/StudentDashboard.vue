<template>
  <div class="admin">
    <Sidebar />
    <div class="main-content" id="panel">
      <AdminNav />
      <!-- Header -->
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4"></div>
            <!-- <div class="row align-items-center py-4">
              <div class="col text-center">
                <a href="#" class="btn btn-sm btn-neutral">Export excel</a>
                <a href="#" class="btn btn-sm btn-neutral">Export PDF</a>
              </div>
            </div>-->
            <!-- Card stats -->
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col-xl-8">
            <div class="card">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="mb-0">Subjects</h3>
                  </div>
                  <div class="col text-right">
                    <a href="#!" class="btn btn-sm btn-primary">..</a>
                  </div>
                </div>
                <div class="card-body d-flex">
                  <div class="card subject-card">
                    <div class="card-body">
                      <h2 class="card-title">English</h2>
                      <p class="card-text">Take this lesson to get good knowledge of mathematics</p>
                      <a class="btn bth-sm btn-primary">
                        <!-- <router-link to="/lessons">Learn</router-link> -->
                      </a>
                      <a class="btn bth-sm btn-primary">Quiz</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Topics section -->
          <div class="col-xl-4">
            <div class="card">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="mb-0">Topics</h3>
                  </div>
                  <div class="col text-right">
                    <a href="#!" class="btn btn-sm btn-primary">%</a>
                  </div>
                </div>
              </div>
              <div class="btn-group-vertical">
                <button data-target="takeLessonModal" type="button" class="btn btn-secondary">1</button>
                <button data-target="takeLessonModal" type="button" class="btn btn-secondary">1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TakeLessonModal />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminNav from "../components/AdminNav";
// import StudentsTable from "../components/StudentsTable";
// import AddStudentModal from "../components/AddStudentModal";
import Sidebar from "../components/Sidebar";
import student from "../data/student";

// import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      sDetails: student
    };
  },
  components: {
    AdminNav,
    Sidebar
  },
  // methods: {
  //   fecthData: function() {
  //     axios.get("").then(resp => resp.data);
  //   }
  // },
  mounted() {
    console.log(this.sDetails);
    // this.sDetails = this.fecthData();
  }
};
</script>
<style scoped>
.admin {
  background: url("../assets/bg1.jpg");
  background-size: cover;
  /* height: 100vh; */
}
.card.subject-card {
  border: 1px solid orange;
  margin: 5px;
  cursor: pointer;
}
</style>