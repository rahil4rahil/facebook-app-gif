<template>
  <b-container>
    <b-row>
      <b-col>
        <SearchInput placeholder="Search" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "GIFComponents",
  components: {
    SearchInput: () => import('@/components/global/SearchInput.vue')
  },
  data() {
    return {

    }
  }
}
</script>

<style>
  
</style>