<template>
  <div id="table1" class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Episodes</h1>
          <button type="button" class="btn btn-primary btn-lg btn-block" @click="$router.go(-1)">Back</button>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Series</th>
              <th scope="col">Name</th>
              <th scope="col">Season</th>
              <th scope="col">Number</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
             <tr v-for="(ep, index) in episodes" :key="index">
              <td>{{ep.series}}</td>
              <td>{{ep.name}}</td>
              <td>{{ep.season}}</td>
              <td>{{ep.number}}</td>
              <td>{{ep.rating}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
      name:"Table",
      props: ['items'],
      data() {
      return {
        episodes: [],
      };
    },
    methods: {
    getEps() {
      const path = 'http://localhost:5000/parse';
      console.log(this.items)
      axios.post(path, {lst: this.items})
        .then((res) => {
          this.episodes = res.data.episodes;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getEps();
  },
  };
</script>

<style scoped>
h1 {
    color:floralwhite;
}
#table1 {
  margin-top: 60px;
}
</style>
