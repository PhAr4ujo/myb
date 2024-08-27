<template>
    <div id="main" class="d-flex align-items-center justify-content-center">
        <form action="" class="bg-dark p-4 round-1" method="post" @submit="createBurguer">
        

            <div class="row">
                <div class="col-sm-12 select">
                    <label for="breadSelection" class="form-label text-white">Bread</label>
                    <input type="text" name="" id="">
                </div>
            </div>

            <div class="row pt-3">
                <div class="col-sm-12 select">
                    <label for="breadSelection" class="form-label text-white">Bread</label>
                    <select v-model="bread" name="breadSelection" class="form-select form-select-lg bg-dark text-white" id="">
                        <option v-for="bread in breads" :key="bread.id" :value="bread.type">{{ bread.type }}</option>
                    </select>
                </div>
            </div>

            <div class="row pt-3">
                <div class="col-sm-12 select">
                    <label for="meatSelection" class="form-label text-white">Meat</label>
                    <select v-model="meat" name="meatSelection" class="form-select form-select-lg bg-dark text-white" id="">
                        <option v-for="meat in meats" :key="meat.id" :value="meat.type">{{ meat.type }}</option>
                    </select>           
                </div>
            </div>

            <div class="row pt-5">
                <div v-for="extra in extrasData" class="col-sm-4 pt-3">
                        <input v-model="extras" class="form-check-input bg-dark text-white" type="checkbox" :value="extra.type" :id="extra.id">
                        <label class="form-check-label ps-2 text-white" :for="extra.id">
                            {{ extra.type }}
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

        data(){
            return{
                breads: null,
                meats: null,
                extrasData: null,
                name: null,
                bread: null,
                meat: null,
                extras: [],
                mensage: null,
            }  
        },
        
        methods: {
            async getSupply() {

                const request = await fetch("http://localhost:3000/supply");
                const data = await request.json();

                this.breads = data.breads;
                this.meats = data.meats;
                this.extrasData = data.extras;
                
                console.log(data);
            },

            async createBurguer(e){
                e.preventDefault();

                const data = {
                    name: this.name,
                    bread: this.bread,
                    meat: this.meat,
                    extra: Array.from(this.extras),
                    status: "Requested"
                }
                console.log(data);
            }
        },

        mounted(){
            this.getSupply();
        }
    }
</script>
