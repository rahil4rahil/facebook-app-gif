<template>
  <b-container class="px-5 mt-4">
    <b-row>
      <b-col>
        <PostCreator />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainContentWrapper",
  components: {
    PostCreator: () => import('@/components/global/PostCreator.vue')
  }
}
</script>

<style>
  
</style>