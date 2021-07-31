<template>
  <b-container align-v="center" class="h-100 text-end p-0">
    <b-row class="h-100">
      <b-col class="m-auto">
				<b-nav align="right">
					<CircularIconButton v-for="item in iconButtonData" :key="item.id" :iconData="item"/>
				</b-nav>
			</b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "RightHeaderWrapper",
	components: {
		CircularIconButton: () => import('@/components/global/CircularIconButton'),
	},
	data() {
		return {
			iconButtonData: [
				{
					id: "userIconButton",
					label: "Rahil",
					imgUrl: "https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/87983822_3525905007480485_3212294654443651072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Uyi6u2BRPV8AX9bMKfa&_nc_ht=scontent.fdel27-4.fna&oh=0cd0a807bf069f606966b7af3977392d&oe=612AD5AD"
				},
				{
					id: "appBarButton",
					iconClass: "fas fa-bars"
				},
				{
					id: "messagerButton",
					iconClass: "fab fa-facebook-messenger"
				},
				{
					id: "notificationButton",
					iconClass: "fas fa-bell"
				},
				{
					id: "arrowDownButton",
					iconClass: "fas fa-sort-down"
				},
			]
		}
	}
};
</script>