<template>
  <b-container class="px-0 mt-3">
    <b-row> 
			<b-col>
				<b-list-group>
					<b-list-group-item class="text-start header-text px-4">Contacts</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
    <b-row>
      <b-col>
        <b-list-group>
          <ListMenuButton
            v-for="item in leftMenuData"
            :key="item.id"
            :menuData="item"
          />
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "RightMenuWrapper",
  components: {
    ListMenuButton: () => import("@/components/global/ListMenuButton.vue"),
  },
  data() {
    return {
      leftMenuData: [
        {
          id: "userStaus1",
          imgUrl: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171030/prithvi-shaw.jpg",
          label: "Prithvi Shaw",
        },
				{
					id: "userStaus5",
					imgUrl: "https://s.ndtvimg.com//images/entities/120/rohit-sharma-857.png",
					label: "Rohit Sharma",
				},
				{
					id: "userStaus6",
					imgUrl: "https://s.ndtvimg.com//images/entities/120/virat-kohli-967.png",
					label: "Virat Kohli",
				},
				{
          id: "userStaus4",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/kannaur-lokesh-rahul_636964748676658608.png",
          label: "Lokesh Rahul",
        },
				{
          id: "userStaus2",
          imgUrl: "https://s.ndtvimg.com//images/entities/120/ms-dhoni-700.png",
          label: "Mahendra Singh Dhoni",
        },
        {
          id: "userStaus3",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/rishabh-rajendra-pant_636974892169901360.png",
          label: "Rishabh Pant",
        },
        {
          id: "userStaus7",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/hardik-himanshu-pandya_636947654802532155.png",
          label: "Hardik Pandya",
        },
				{
          id: "userStaus10",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/ravindra-jadeja-855.png",
          label: "Ravindra Jadeja",
        },
        {
          id: "userStaus8",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/shami-ahmed-1580.png",
          label: "Mohammad Shami",
        },
        {
          id: "userStaus9",
          imgUrl: "https://s.ndtvimg.com/images/entities/120/jasprit-jasbirsingh-bumrah_636964748374078654.png",
          label: "Jasprit Bumrah",
        },
        {
          id: "userStaus11",
          imgUrl: "https://pbs.twimg.com/profile_images/1323570438052536321/DfubUoTS_400x400.jpg",
          label: "Mohammad Siraj",
        },
      ],
    };
  },
};
</script>

<style>
.header-text {
	font-weight: 600;
	font-size: 16px;
	color: rgb(101, 103, 107);
	background: transparent;
	border: none;
}

</style>