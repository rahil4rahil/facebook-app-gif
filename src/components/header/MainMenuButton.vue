<template>
  <div>
    <router-link v-if="menuData.pathName" :to="{ name: menuData.pathName }" class="custom-menu-link" :id="menuData.id">
      <i :class="menuData.iconClass"></i>
    </router-link>
    <b-tooltip :target="menuData.id" placement="bottom" triggers="hover">
      {{menuData.name}}
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "MainMenuButton",
  props: {
    menuData: {
      default: { pathName: "MainContent" },
      type: Object,
    },
  },
};
</script>
<style>
.custom-menu-link {
  display: block;
  vertical-align: middle;
  padding: 10px;
  margin: 10px 5px 0 5px;
  border-radius: 5px;
}
.custom-menu-link:hover {
  background: rgb(240, 242, 245);
}
.custom-menu-link.router-link-exact-active {
  border-bottom: 3px solid rgb(24, 119, 242);
  border-radius: 0px;
}
.custom-menu-link.router-link-exact-active:hover {
  background: white;
}

.custom-menu-link i {
  color: rgb(101, 103, 107);
  font-size: 24px;
}
.custom-menu-link.router-link-exact-active i {
  color: rgb(24, 119, 242);
}
.tooltip-inner {
  opacity: .7;
}
</style>