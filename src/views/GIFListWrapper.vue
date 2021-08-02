<template>
  <div v-if="gifList.length > 0">
    <GIFViewer v-for="item in gifList" :key="item.id" :gifData="item" />
  </div>
</template>

<script>
export default {
  name: "GIFListWrapper",
  components: {
    GIFViewer: () => import('@/components/global/GIFViewer.vue')
  },
  props: {
    gifList: {
      default: [],
      type: Array
    }
  },
  mounted() {

  },
  data() {
    return {
      
    }
  },  
}
</script>  

<style>

</style>