<template>
  <div id="table1" class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Episodes</h1>
          <button type="button" class="btn btn-primary btn-lg btn-block" @click="bar">Back</button>
          <section v-if="errored">
            <h2>We're sorry, we're not able to retrieve this information at the moment, please try back later</h2>
          </section>

          <section v-else>
              <div v-if="loading">
                  <div class="d-flex justify-content-center">
                      <div class="spinner-border text-light" style="margin-top: 15px; width: 6rem; height: 6rem;" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                  </div>
              </div>
              <div v-else>
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col" @click="sort('series')">Series</th>
                      <th scope="col" @click="sort('name')">Name</th>
                      <th scope="col" @click="sort('season')">Season</th>
                      <th scope="col" @click="sort('number')">Number</th>
                      <th scope="col" @click="sort('rating')">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr v-for="(ep, index) in sortedEps" :key="index">
                      <td>{{ep.series}}</td>
                      <td>{{ep.name}}</td>
                      <td>{{ep.season}}</td>
                      <td>{{ep.number}}</td>
                      <td>{{ep.rating}}</td>
                    </tr>
                  </tbody>
                </table>
               </div>
          </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapActions } from 'vuex'

  export default {
      name:"Table",
      props: ['items'],
      data() {
      return {
          episodes: [],
          loading: true,
          errored: false,
          currentSort:'series',
          currentSortDirt:'asc'
      };
    },
    methods: {
   ...mapActions([
    'updateArray'
       ]),
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
          this.errored = true
        })
        .finally(()=>this.loading = false);
    },
     sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
      },
        bar () {
           this.$router.go(-1)
            this.$store.dispatch('updateArray',[]);
        }
      },
      created() {
        this.getEps();
      },
      computed:{

        sortedEps:function() {
          return this.episodes.slice().sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc') modifier = -1;
            if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
            return 0;
      });
    }
  }
  };
</script>

<style scoped>
h1 {
    color:floralwhite;
}
h2 {
    color:floralwhite;
}
#table1 {
  margin-top: 60px;
}
</style>
