<template>
    <div id="main" class="row align-items-center justify-content-start">
        <div class="col-sm-3 text-center bg-dark">
            <h1 id="" class="text-white">Order Now!</h1>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Banner",

    }

</script>

<style scoped>
    #main{
        height: 80vh;
        background-image: url('/public/img/burger.jpg');
        background-size: cover;
        background-position: 0;
        background-repeat: no-repeat;
    }
    
</style>