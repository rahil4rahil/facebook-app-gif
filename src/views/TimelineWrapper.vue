<template>
  <b-container class="my-3 px-0">
		<b-row>
			<b-col>
				<TimelinePost/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "TimelineWrapper",
	components: {
		TimelinePost: () => import('@/components/posts/TimelinePost')
	}
}
</script>