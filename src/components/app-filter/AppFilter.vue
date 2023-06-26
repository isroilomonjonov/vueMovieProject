<template>
  <div class="btn-group">
    <PrimaryButton
      v-for="btn in filterButtons"
      class="btn"
      @click="filterHandler(btn.name)"
      :class="[filterName === btn.name ? 'btn-dark' : 'btn-outline-dark']"
      :key="btn.name"
    >
      {{ btn.title }}
    </PrimaryButton>
  </div>
</template>

<script>
export default {
  props: {
    updateFilter: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterButtons: [
        {
          title: "Barcha kinolar",
          name: "all",
        },
        {
          title: "Mashxur kinolar",
          name: "popular",
        },
        {
          title: "Eng ko'p ko'rilgan kinolar",
          name: "mostViewers",
        },
      ],
      filter: "all",
    };
  },
  methods: {
    filterHandler(filter) {
      this.filter = filter;
      this.updateFilter(this.filter);
    },
  },
};
</script>

<style scoped></style>
