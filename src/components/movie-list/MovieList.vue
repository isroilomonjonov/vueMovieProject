<template>
  <Box class="movie-list list-group">
    <MovieListItem
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
      @onToggle="$emit('onToggle',$event)"
      @onDelete="$emit('onDelete',$event)"
    />
  </Box>
</template>

<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue";

export default {
  components: {
    MovieListItem,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style scoped>
.movie-list {
  margin-top: 2rem;
}
</style>
