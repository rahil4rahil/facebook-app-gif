<template>
  <div>
    <img class="content-gif" width="100%" :src="imgUrl" alt="" @click="addGIFToPost()">
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
    data() {
      return {
        imgUrl: "https://media.giphy.com/media/2QnAUzL2KclxRDxp9Q/giphy.gif"
      }
    }
  },
  mounted() {
  },
  watch: {
    gifData: {
      immediate: true,
      deep: true,
      handler(data) {
        this.imgUrl = `https://media.giphy.com/media/${data.id}/giphy.gif`
      }
    }
  },
  methods: {
    addGIFToPost() {
      this.$globalEventBus.$emit("switchComponent", { componentName:"CreatePostDialogContent", title: "Create Post", displayBackButton: false})
      this.$nextTick(() => {
        this.$globalEventBus.$emit("addGIFToPost", this.imgUrl)
        console.log("event Emited")
      })
    }
  },
}
</script>

<style>
  .content-gif {
    cursor: pointer;
  }
</style>