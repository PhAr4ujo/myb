<template>
    <div id="main" class="d-flex align-items-center justify-content-center">
        <form action="" class="bg-dark p-4 round-1" method="post">
        
        <div class="row">

            <div class="col-sm-12 select">
                <label for="breadSelection" class="form-label text-white">Bread</label>
                <select name="breadSelection" class="form-select form-select-lg bg-dark text-white" id="">
                    
                </select>
            </div>
        </div>

        <div class="row pt-3">
            <div class="col-sm-12 select">
                <label for="meatSelection" class="form-label text-white">Meat</label>
                <select name="meatSelection" class="form-select form-select-lg bg-dark text-white" id="">

                </select>           
            </div>
        </div>

        <div class="row pt-5">
            <div class="col-sm-3">
                <input class="form-check-input bg-dark text-white" type="checkbox" value="" id="testSupply">
                <label class="form-check-label ps-2 text-white" for="testSupply">
                    supply
                </label>
            </div>
        </div>

        <div class="row pt-5">
            <div class="col-sm-12 d-flex align-items-center justify-content-center">
                <button type="submit" class="btn btn-primary mt-0">Order</button>
            </div>
        </div>
        
        </form>
    </div>
</template>

<style scoped>
    #main {
        height: 90vh;
    }


    .col-sm-3{
        height: auto;
    }
    
    select{
        height: 50%
    }

    .select{
        height: 15%;
    }

    button[type="submit"]{
        width: 90%;
    }

    form {
        height: auto;
        width: 33%;
    }

</style>

<script>
    export default {
        name: "BurguerForm",
    }
</script>
