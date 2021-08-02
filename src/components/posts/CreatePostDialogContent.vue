<template>
  <b-container class="px-0">
    <b-container class="custom-scrollbar px-0" style="overflow-x: hidden; max-height: 450px; overflow-y: auto;"> 
      <b-row class="px-3 py-3">
        <b-col>
          <b-form-textarea v-model="textInput" ref="searchRef" type="textarea" class="custom-input-area w-100" size="lg" rows="3" max-rows="8" placeholder="Whats on your Mind, Rahil?" /> 
        </b-col>
      </b-row>
      <b-row class="mx-0 px-0" v-if="imgUrl">
        <b-col class="mx-0 px-0">
          <PostImageContainer :gifUrl="imgUrl" @removeGIFFromPost="removeGIFFromPost" />
        </b-col>
      </b-row>
    </b-container>
    <b-row class="custom-add-post mx-3 p-2 my-3" @click="openGIFComponent">
      <b-col cols="6" class="my-auto">
        <h6 class="m-0">Add to Your Post</h6>
      </b-col>
      <b-col cols="6">
        <CircularIcon :logoData="{ imgUrl: gifImage }" :clickHandler="openGIFComponent" :height="'30px'"  />
      </b-col>
    </b-row>
  
    <b-row class="mx-3 my-3">
      <b-col class="px-0">
        <button class="custom-post-button" color="rgb(24, 119, 242)">Post</button>
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
      gifImage: require('@/assets/gif-image.png'),
      imgUrl: undefined,
    }
  },
  components: {
    CircularIcon: () => import('@/components/global/CircularIcon.vue'),
    PostImageContainer: () => import('@/components/global/PostImageContainer')

  },
  created() {
    this.$globalEventBus.$on('addGIFToPost', this.addGIFToPost)
    console.log("Component Remounted")
  },
  methods: {
    openGIFComponent() {
      console.log("Open GIF Dialog")
      this.$globalEventBus.$emit("switchComponent", { componentName:"GIFComponent", title: "Choose a GIF", displayBackButton: true})
    },
    addGIFToPost(gifUrl) {
      this.$nextTick(() =>{
        this.imgUrl = gifUrl
        console.log(this.imgUrl)
      })
    },
    removeGIFFromPost() {
      this.imgUrl = null
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
  cursor: pointer;
}
.custom-post-button {
  background: rgb(24, 119, 242);
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 600;
}

.custom-scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
  background-color: rgb(206, 208, 212, .2);
}

.custom-scrollbar::-webkit-scrollbar
{
	width: 7px;
	background-color: rgb(206, 208, 212, .2);
}

.custom-scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(121, 121, 121, 0.3);
	background-color: #555;
}

</style>