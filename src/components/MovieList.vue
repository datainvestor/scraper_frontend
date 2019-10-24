<template>
  <ul>
  <movie-list-item li v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
</ul>
</template>
 
<script>
import MovieListItem from './MovieListItem'

export default {
  name: 'movie-list',
  components: {
    MovieListItem
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>
 
<style>
</style>