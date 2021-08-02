<template>
  <b-list-group-item class="custom-list-menu text-start" >
    <img class="custom-circular-image" height="30px" :src="menuData.imgUrl" alt="" />
    <div class="custom-menu-label text-truncate">{{ menuData.label}}</div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "ListMenuButton",
  props: {
    menuData: {
      default: { imgUrl:"https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/87983822_3525905007480485_3212294654443651072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=Uyi6u2BRPV8AX9bMKfa&_nc_ht=scontent.fdel27-4.fna&oh=a92d9dfc0c29b6c9710cba1a2cf63116&oe=6129387F", label: "Rahil Khan" },
      type: Object
    }
  }
};
</script>

<style>
.custom-list-menu {
  border: none;
  background: transparent;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
}

.custom-list-menu:hover {
  background: rgb(228, 230, 232);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.custom-list-menu .custom-circular-image {
	height: 32px;
	border-radius: 50%;
  margin-right: 10px;
}

.custom-list-menu .custom-menu-label {
  font-weight: 600;
  font-size: 14px;
  margin: auto 0;
}

</style>