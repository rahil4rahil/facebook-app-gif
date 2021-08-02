<template>
  <b-container class="px-3 py-3">
    <b-row>
      <b-col>
        <b-form-textarea v-model="textInput" ref="searchRef" type="textarea" class="custom-input-area w-100" size="lg" rows="3" max-rows="8" placeholder="Whats on your Mind, Rahil?" /> 
      </b-col>
    </b-row>
    <b-row class="custom-add-post mx-1 p-2">
      <b-col cols="6" class="my-auto">
        <h6 class="m-0">Add to Your Post</h6>
      </b-col>
      <b-col cols="6">
        <CircularIcon :logoData="{ imgUrl: gifImage }" :clickHandler="openGIFComponent" :height="'30px'"  />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CreatePostDialogContent",
  data() {
    return {
      textInput: "",
      gifImage: require('@/assets/gif-image.png')
    }
  },
  components: {
    CircularIcon: () => import('@/components/global/CircularIcon.vue')
  },
  methods: {
    openGIFComponent() {
      console.log("Open GIF Dialog")
      this.$globalEventBus.$emit("switchComponent", { componentName:"GIFComponent", title: "Choose a GIF", displayBackButton: true})
    }
  }
}
</script>

<style >
textarea.custom-input-area, textarea.custom-input-area:focus  {
  border: none;
  box-shadow: none; 
  overflow-y: hidden !important;
  padding: 0;
}
.custom-add-post {
  border: 1px solid rgb(206, 208, 212) !important;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}
  
</style>