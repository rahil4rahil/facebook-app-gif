<template>
  <b-container class="text-start py-2 p-0 px-1">
    <b-row align-v="center">
      <b-col align-v="center">
        <CircularIcon :logoData="logoData" />
        <SearchInput type="text" placeholder="Search Facebook" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LeftHeaderWrapper",
  components: {
    CircularIcon: () => import("@/components/global/CircularIcon.vue"),
    SearchInput: () => import("@/components/global/SearchInput.vue"),
  },
  data() {
    return {
			logoData: {
				imgUrl: require("@/assets/Facebook-logo.png"), navLink: "/"
			}
		};
  },
};
</script>