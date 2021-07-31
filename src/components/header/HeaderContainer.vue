<template>
  <b-container class="full-width custom-header">
    <b-row>
      <b-col>
        <LeftHeaderWrapper />
      </b-col>
      <b-col cols="5">
        <MiddleHeaderWrapper />
      </b-col>
      <b-col>
        <RightHeaderWrapper />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "HeaderContainer",
  components: {
    LeftHeaderWrapper: () => import("@/views/header/LeftHeaderWrapper.vue"),
    MiddleHeaderWrapper: () => import("@/views/header/MiddleHeaderWrapper.vue"),
    RightHeaderWrapper: () => import("@/views/header/RightHeaderWrapper.vue"),
  },
};
</script>

<style>
.custom-header {
  background-color: white;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0;
  z-index: 99;
}
</style>