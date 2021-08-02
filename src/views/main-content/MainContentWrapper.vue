<template>
  <b-container class="px-5 mt-4">
    <b-row>
      <b-col>
        <PostCreator />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TimelineWrapper />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainContentWrapper",
  components: {
    PostCreator: () => import('@/components/global/PostCreator.vue'),
    TimelineWrapper: () => import('@/views/TimelineWrapper.vue')
  }
}
</script>

<style>
  
</style>