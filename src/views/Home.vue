<template>
  <b-container class="full-width p-0">
    <b-row>
      <b-col>
        <HeaderContainer />
      </b-col>
    </b-row>
    <b-row class="header-margin-top">
      <b-col cols="3">
        <LeftMenuWrapper />
      </b-col>
      <b-col cols="6" >
        <router-view />
      </b-col>
      <b-col cols="3" >
        <RightMenuWrapper />
      </b-col>
    </b-row>    
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    HeaderContainer: () => import("@/components/header/HeaderContainer.vue"),
    RightMenuWrapper: () => import("@/views/RightMenuWrapper.vue"),
    LeftMenuWrapper: () => import("@/views/LeftMenuWrapper.vue"),
  },
};
</script>

<style>
.full-width {
  width: 100%;
  max-width: 100%;
}
.full-height {
  height: 100%;
  min-height: 100%;
}
.header-margin-top {
  margin-top: 60px;
}
</style>