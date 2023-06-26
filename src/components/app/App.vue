<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :favoriteMoviesCount="movies.filter((e) => e.favorite).length"
      />
      <Box class="search-panel">
        <SearchPanel :updateTerm="updateTerm"/>
        <AppFilter :updateFilter="updateFilter" :filterName="filter"/>
      </Box>
      <MovieList
        :movies="onFilter(onSearch(movies,term),filter)"
        @onToggle="onToggle"
        @onDelete="onDelete"
      />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>
<script>
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue";
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "Avengers",
          viewers: 377,
          favorite: true,
          like: true,
        },
        {
          id: 2,
          name: "SpiderMan",
          viewers: 670,
          favorite: false,
          like: false,
        },
        {
          id: 3,
          name: "Intersteller",
          viewers: 999,
          favorite: false,
          like: false,
        },
      ],
      term:'',
      filter:'all'
    };
  },
  methods: {
    createMovie(data) {
      if(!data.name||!data.viewers)return
      this.movies.push(data);
    },
    onToggle({id,prop}) {
      this.movies=this.movies.map((e)=>{
        if(e.id==id){
         return e={...e,[prop]:!e[prop]}
        }
        return e
      })
    },
    onDelete(id){
      const movie = this.movies.filter((movie) => movie.id !== id);
      this.movies=movie
    },
    onSearch(arr,term){
      if(term.trim().length===0)return arr;
      return arr.filter(e=>e.name.toLowerCase().indexOf(term)>-1)
    },
    onFilter(arr,filter){
      switch (filter) {
        case 'popular':
          return arr.filter(e=>e.like)
        case 'mostViewers':
          return arr.filter(e=>e.viewers>500)
        default:
          return arr
      }
    },
    updateTerm(term){
      this.term=term
    },
    updateFilter(filter){
      this.filter=filter
    }
  },
};
</script>
<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
}
</style>
