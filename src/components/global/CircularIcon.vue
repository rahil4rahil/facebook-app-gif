<template>
	<a :href="logoData.navLink" ><img :src="logoData.imgUrl" alt="facebook-logo" height="40px" class="circular" /></a>
</template>

<script>
export default {
  name: "CircularIcon",
  props: {
    logoData: {
      default: { imgUrl: require("@/assets/Facebook-logo.png"), navLink: "/" },
      type: Object,
    },
  },
};
</script>

<style >
  .circular {
    border-radius: 50%;
  }
</style>