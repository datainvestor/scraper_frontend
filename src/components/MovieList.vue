<template>
  <ul class="grid">
  <movie-list-item li v-for="movie in movies" :movie="movie" :key="movie.imdbID"/>
</ul>
</template>
 
<script>
import MovieListItem from './MovieListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'movie-list',
  components: {
    MovieListItem
  },
  computed: {
  ...mapGetters([
    'movies'
    ])
  }
}
</script>
 
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-column-gap: 6rem;
  grid-row-gap: 3rem;
  padding: 0;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin-top: 2rem;
  }
}
</style>