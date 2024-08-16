<template>
  <div class="container-fluid">
    <NavBar :logo="logoSrc" :alt="appName" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Footer from './components/Footer.vue';
    export default {
        components: {
            NavBar,
            Footer,
        },
        data() {
            return {
                logoSrc: "/img/logo.png",
                appName: "Make Your Burguer",
            }
        }
    }
</script>

<style>
    .container-fluid {
        background-color: #fffcfc;
    }

    .main{
      height: 84vh;
    }
</style>
