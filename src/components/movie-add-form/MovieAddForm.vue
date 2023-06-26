<template>
  <Box class="movie-add-form">
    <h3>Yangi Kino Qoshish</h3>
    <form action="" class="add-form d-flex gap-1" @submit.prevent>
      <Input
        class="new-movie-label"
        placeholder="Kino nomi"
        v-model="name"
      />
      <Input
        type="number"
        class="new-movie-label"
        placeholder="Nechi marotaba ko'rilgan?"
        v-model="viewers"
      />
      <PrimaryButton class="btn btn-outline-dark" type="submit" @click="addMovie"
        >Qo'shish</PrimaryButton
      >
    </form>
  </Box>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      const newMovie = {
        id: Date.now(),
        name: this.name,
        viewers: this.viewers,
        favorite: false,
        like: false,
      };
      this.$emit("createMovie", newMovie);
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>

<style scoped>
.movie-add-form {
  margin-top: 2rem;
}
</style>
