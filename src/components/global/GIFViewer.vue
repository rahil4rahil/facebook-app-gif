<template>
  <div>
    <img class="content-gif" width="100%" :src="imgUrl" alt="" @click="addGIFToPost(gifData)">
  </div>
</template>
<script>
export default {
  name: "GIFViewer",
  props: {
    gifData: {
      default: {
        id: "3o7btNEQOGZiEaOAus",
        embed_url: "https://media3.giphy.com/media/2QnAUzL2KclxRDxp9Q/giphy.gif?cid=790b7611d61b578b930c3481d4ad59f82d19d7fcb8bc249d&rid=giphy.gif&ct=g",
      },  
      type: Object
    },
    imgUrl: "",
    
  },
  watch: {
    gifData: {
      immediate: true,
      deep: true,
      handler(data) {
        this.imgUrl = `https://media.giphy.com/media/${data.id}/giphy.gif`
      }
    }
  }
}
</script>

<style>
  .content-gif {
    cursor: pointer;
  }
</style>