<template>
  <b-card>
    <b-container class="text-start px-0">
      <b-row class="px-3 py-3 mx-0">
        <b-col class="px-0">
          <CircularIcon :logoData="iconData" />
          <span class="px-3">Rahil Khan</span>
        </b-col>
      </b-row>
      <b-row class="px-3 py-3 mx-0">
        <b-col class="px-0">
          <b-card-text>{{ postData.text }}</b-card-text>
        </b-col>
      </b-row>
      <b-row >
        <b-col>
          <img :src="postData.img" alt="img" width="100%">
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="divider mx-2 my-3"></div>
        </b-col>
      </b-row>
      <b-row class="m-0 w-100">
        <b-col class="px-2 pb-2 w-100" v-for="item in buttonData" :key="item.id" ><ImageButton :buttonData="item" /></b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "TimelinePost",
  components: {
    CircularIcon: () => import("@/components/global/CircularIcon.vue"),
    ImageButton: () => import("@/components/global/ImageButton.vue"),

  },
  data() {
    return {
      iconData: {
        imgUrl: "https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/87983822_3525905007480485_3212294654443651072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Uyi6u2BRPV8AX9bMKfa&_nc_ht=scontent.fdel27-4.fna&oh=0cd0a807bf069f606966b7af3977392d&oe=612AD5AD", navLink: "/"
      },
      buttonData: [
        {
          id: "shareButton1",
          navLink: "/", 
          imgClass:"far fa-thumbs-up", 
          label:"Share", 
          color:"rgb(101, 103, 107)"
        },
        {
          id: "commentButton2",
          navLink: "/", 
          imgClass:"far fa-comment-alt", 
          label:"Comment", 
          color:"rgb(101, 103, 107)"
        },
        {
          id: "shareButton3",
          navLink: "/", 
          imgClass:"fas fa-share", 
          label:"Share", 
          color:"rgb(101, 103, 107)"
        },
      ],
    }
  },
  props: {
    postData: {
      default: () => { return  { id: "post1", img: "https://media.giphy.com/media/2QnAUzL2KclxRDxp9Q/giphy.gif", text: "hello" } },
      type: Object
    }
  }

}
</script>
<style >
.card-body {
  padding: 0;
}
  
</style>