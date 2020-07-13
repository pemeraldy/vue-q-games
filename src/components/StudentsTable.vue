<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col text-left">
          <h1 class="mb-0">Students</h1>
        </div>
        <!-- <div class="col text-right">
          <a href="#" class="btn btn-sm btn-neutral">Add Student</a>
        </div>-->
      </div>
    </div>
    <div class="table-responsive">
      <!-- Projects table -->
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col">Student name</th>
            <th scope="col">Topics Completed</th>
            <th scope="col">Last Seen</th>
            <th scope="col">Progress</th>
            <th scope="col">IDP N0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Amina</th>
            <td>4/10</td>
            <td>4/12/2020</td>
            <td>
              <i class="fas fa-arrow-up text-success mr-3"></i> 46,53%
            </td>
            <td>1253dd</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>