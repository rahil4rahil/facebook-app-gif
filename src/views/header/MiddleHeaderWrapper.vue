<template>
    <b-container class="custom-mid-container px-0">
        <b-row>
            <b-col class="p-0" v-for="item in menus" :key="item.id"><MainMenuButton  :menuData="item"  /></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'MiddleHeaderWrapper',
    components: {
        MainMenuButton: () => import('@/components/header/MainMenuButton')
    },
    data: () => {
        return {
            menus: [
                {
                    id:"homeMenu",
                    name:"Home",
                    pathName:"MainContent",
                    iconClass:"fas fa-home"
                },
                {
                    id:"watchMenu",
                    name:"Watch",
                    pathName:"Watch",
                    iconClass:"fab fa-youtube"
                },
                {
                    id:"marketPlaceMenu",
                    name:"Marketplace",
                    pathName:"MarketPlace",
                    iconClass:"fas fa-store"
                },
                {
                    id:"groupMenu",
                    name:"Group",
                    pathName:"Group",
                    iconClass:"fas fa-users"
                },
                {
                    id:"gamingMenu",
                    name:"Gaming",
                    pathName:"Gaming",
                    iconClass:"fas fa-gamepad"
                },
            ]
        }
    }
}
</script>

<style >
    .custom-mid-container {
        max-width: 700px;
    }
</style>