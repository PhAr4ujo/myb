<template>
    <div id="app" class="row text-center bg-dark">
        <router-link id="logo-box" class="rounded col-sm-10 d-flex flex-row justify-content-start" to="/">
            <img :src="logo" :alt="alt" class="ps-4" id="logo">
        </router-link>
        <router-link class="rounded col-sm-1 text-white link-underline link-underline-opacity-0 link-warning link-underline-opacity-75-hover custom-link" to="/">Home</router-link> 
        <router-link class="rounded col-sm-1 text-white link-underline link-underline-opacity-0 link-warning link-underline-opacity-75-hover custom-link" to="/orders">Orders</router-link>
    </div>
</template>

<script>
    export default{
        name: "NavBar",
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    #logo-box{
        height: 100%;
    }

    #logo{
        height: 70%;
    }

    .custom-link{
        transition: 0.7s;
    }

    .row{
        padding-top: 1%;
        height: 8vh;
    }
</style>