<template>
  <div class="col-xl-8">
    <div class="card">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">Topics</h3>
          </div>
          <div class="col">
            <select>
              <option value="English">English</option>
              <option value="English">Mathematics</option>
              <option value="English">Science</option>
            </select>
          </div>
          <div class="col text-right">
            <a href="#!" class="btn btn-sm btn-primary">See all</a>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-flush">
          <thead class="thead-light">
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Level One</th>
              <td>6 Tpoics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>