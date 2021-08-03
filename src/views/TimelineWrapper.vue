<template>
  <b-container class="my-3 px-0">
		<b-row>
			<b-col>
				<TimelinePost v-for="item in postList" :key="item.id" :postData=item />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "TimelineWrapper",
	components: {
		TimelinePost: () => import('@/components/posts/TimelinePost')
	},
	data() {
		return {

		}
	},
	computed: {
		postList() {
			return this.$store.getters['getPostsList']
		}
	}
}
</script>