<template>
  <div class="admin">
    <Sidebar />
    <div class="main-content" id="panel">
      <AdminNav />
      <StudentDashboardHeader />

      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row">
          <Topics />
          <SubjectLessons />
        </div>
      </div>
    </div>
    <TakeLessonModal />
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import TakeLessonModal from "../components/TakeLessonModal";
import Topics from "../components/Topics";

import Sidebar from "../components/Sidebar";
import student from "../data/student";
import SubjectLessons from "../components/SubjectLessons";
import StudentDashboardHeader from "../components/StudentDashboardHeader";

export default {
  name: "Admin",

  data() {
    return {
      sDetails: student
    };
  },
  components: {
    AdminNav,
    Sidebar,
    TakeLessonModal,
    StudentDashboardHeader,
    Topics,
    SubjectLessons
  }
};
</script>



<style scoped>
</style>