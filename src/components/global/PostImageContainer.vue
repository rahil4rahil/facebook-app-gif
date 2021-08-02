<template>
  <b-container class="px-0 mx-0">
    <b-row class="px-0 mx-0">
      <b-col class="px-0 mx-0">
        <button class="close button-over-gif" @click="$emit('removeGIFFromPost')">
          <i class="fas fa-times"></i>     
        </button>
        <img :src="gifUrl" alt="gif" width="100%">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name:"PostImageContainer",
  props: {
    gifUrl: {
      default: "",
      type: String
    }
  },
  watch: {
    gifUrl: {
      immediate: true,
      handler(url) { 
        console.log(url)
      }
    }
  }
}
</script>

<style>
  .button-over-gif {
    position: relative;
    top: 35px;
    left: 460px;
  }
</style>