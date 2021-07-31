<template>
	<b-nav-item class="custom-icon-button mr-2">
		<span v-if="iconData.label">
			<img class="custom-circular-image" :src="iconData.imgUrl" alt="user-image">
			<span class="custom-icon-label">{{ iconData.label }}</span>
		</span>
		<span v-else>
			<i :class="iconData.iconClass" ></i>
		</span>
	</b-nav-item>
</template>

<script>
export default {
	name: "CircularIconButton",
	props: {
		iconData: {
			defualt: { iconClass: "fas fa-bars"},
			type: Object
		}
	}
}
</script>

<style>
.custom-icon-button {
	font-size: 20px;
	border-radius: 30px;
	background: rgb(228, 230, 235, .5);
	height: fit-content;
	cursor: pointer;
	/* margin: auto; */
	margin-right: 5px;
}

.custom-icon-button:hover {
	background: rgb(228, 230, 235, 1);
	
}

.custom-icon-button .nav-link {
	padding: 5px;
	border-radius: 15px;
}

.custom-icon-button i {
	color: black;
	padding: 0 10px;
}

.custom-icon-button .custom-icon-label {
	font-size: 16px;
	padding: 5px 10px;
	color: black;
	text-decoration: none;
}

.custom-icon-button .custom-circular-image {
	height: 30px;
	border-radius: 50%;
}

</style>