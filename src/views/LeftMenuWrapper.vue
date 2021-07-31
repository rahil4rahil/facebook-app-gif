<template>
  <b-container class="px-0 mt-3">
    <b-row>
      <b-col>
        <b-list-group>
          <ListMenuButton v-for="item in leftMenuData" :key="item.id" :menuData="item" />
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LeftMenuWrapper",
  components: {
    ListMenuButton: () => import('@/components/global/ListMenuButton.vue')
  },
  data() {
    return {
      leftMenuData: [
        {
          id:"profileNameImage",
          imgUrl:"https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/87983822_3525905007480485_3212294654443651072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=Uyi6u2BRPV8AX9bMKfa&_nc_ht=scontent.fdel27-4.fna&oh=a92d9dfc0c29b6c9710cba1a2cf63116&oe=6129387F",
          label: "Rahil Khan"
        },
        {
          id: "covidInfoCenter",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/yx/r/5rR6LRpNc5u.png",
          label:"COVID-19 Information Center"
        },
        {
          id: "fbFriendsMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
          label:"Friends"
        },
        {
          id: "fbGroupMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
          label:"Groups"
        },
        {
          id: "fbMarketPlaceMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
          label:"Marketplace"
        },
        {
          id: "fbWatchMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png",
          label:"Watch"
        },
        {
          id: "fbEventsMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png",
          label:"Events"
        },
        {
          id: "fbMemoriesMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png",
          label:"Memories"
        },
        {
          id: "fbSavedMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
          label:"Saved"
        },
        {
          id: "fbPagesMenu",
          imgUrl: "https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
          label:"Pages"
        },
      ]
    }
  }
}
</script>

<style>

</style>