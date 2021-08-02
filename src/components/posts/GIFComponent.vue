<template>
  <b-container class="mx-0 px-0" style="overflow-y: hidden">
    <b-row class="w-100 mx-0">
      <b-col class="mx-0 px-3 py-2">
        <SearchInput
          placeholder="Search"
          :fullWidth="true"
          :changeHandler="getGIFs"
        />
      </b-col>
    </b-row>
    <b-row class="w-100 mx-0 content-gif-container custom-scrollbar">
      <b-col class="mx-0 px-0">
        <GIFListWrapper v-if="gifList.length > 0" :gifList="gifList" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "GIFComponents",
  components: {
    SearchInput: () => import("@/components/global/SearchInput.vue"),
    GIFListWrapper: () => import("@/views/GIFListWrapper.vue"),
  },
  data() {
    return {
      pagination: { limit: 10, offset: 0 },
      gifList: [],
    };
  },
  mounted() {
    this.getGIFs("a")
  },
  methods: {
    getGIFs(q) {
      let query = q.target && q.target.value ? q.target.value : "a"
      this.$store
        .dispatch("fetchGIFs", {
          query: query,
          offset: this.pagination.offset,
          limit: this.pagination.limit,
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.gifList = response.data;
          this.pagination.limit = response.pagination.count;
          this.pagination.offset = response.pagination.offset;
        });
    },
  },
};
</script>

<style>
.content-gif-container {
  max-height: 60vh;
  min-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}


</style>