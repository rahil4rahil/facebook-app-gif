<template>
   <b-card>
    <b-container class="text-start px-0">
      <b-row>
        <b-col cols="1">
          <CircularIcon :logoData="iconData" />
        </b-col>
        <b-col cols="11" >
          <SearchInputButton placeholder="What's on your mind, Rahil?" :clickHandle="openCreatePostDialog" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="divider mx-2 my-3"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="px-0 mx-1" v-for="item in buttonData" :key="item.id" ><ImageButton :buttonData="item" /></b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "PostCreator",
  components: {
    CircularIcon: () => import("@/components/global/CircularIcon.vue"),
    SearchInputButton: () => import("@/components/global/SearchInputButton.vue"),
    ImageButton: () => import("@/components/global/ImageButton.vue"),
  },
  data() {
    return {
      iconData: {
        imgUrl: "https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/87983822_3525905007480485_3212294654443651072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Uyi6u2BRPV8AX9bMKfa&_nc_ht=scontent.fdel27-4.fna&oh=0cd0a807bf069f606966b7af3977392d&oe=612AD5AD", navLink: "/"
      },
      buttonData: [
        {
          id: "linkButton1",
          navLink: "/", 
          imgClass:"fas fa-video", 
          label:"Live Video", 
          color:"rgb(240,40,73)"
        },
        {
          id: "linkButton2",
          navLink: "/", 
          imgClass:"fas fa-images", 
          label:"Photo/Video", 
          color:"rgb(69,189,98)"
        },
        {
          id: "linkButton3",
          navLink: "/", 
          imgClass:"far fa-smile", 
          label:"Feeling/Activity", 
          color:"rgb(247,185,40)"
        },
      ]
    }
  },
  methods: {
    openCreatePostDialog() {
      this.$globalEventBus.$emit('openGenericDialog', { componentName:"CreatePostDialogContent", title: "Create Post" })
    }
  }
}
</script>

<style>
  .card {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    border: none;
  }
  .divider {
    height: 1px;
    background: rgb(101, 103, 107, .2);
  }
</style>