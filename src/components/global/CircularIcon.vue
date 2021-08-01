<template>
	<a @click="clickHandler"><img :src="logoData.imgUrl" alt="facebook-logo" :height="height" class="circular" /></a>
</template>

<script>
export default {
  name: "CircularIcon",
  props: {
    logoData: {
      default: { imgUrl: require("@/assets/Facebook-logo.png"), navLink: "/" },
      type: Object,
    },
    clickHandler: {
      default:() => this.$route.push({path:'/'}),
      type: Function
    },
    height: {
      default: "40px",
      type: String
    }
  },
};
</script>

<style >
  .circular {
    border-radius: 50%;
    cursor: pointer;

  }
</style>