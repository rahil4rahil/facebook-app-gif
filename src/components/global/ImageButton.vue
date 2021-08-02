<template>
  <div class="button-container"> 
    <b-list-group-item class="custom-list-menu text-center" >
      <i :class="buttonData.imgClass" :style="`color:${buttonData.color}`"></i>
      <span class="custom-menu-label text-truncate">{{buttonData.label}}</span>
  </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "ImageButton",
  props: {
    buttonData: {
      default: { navLink: "/", imgClass:"fas fa-video", label:"Live Video", color:"" },
      type: Object
    }
  }
}
</script>
<style>
  .button-container .custom-list-menu {
    border-radius: 10px;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
  }
  .button-container .custom-list-menu i {
    margin-right: 8px;
  }
  .button-container .custom-menu-label {
    font-size: 12px;
  }
</style>