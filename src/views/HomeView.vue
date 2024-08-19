<template> 
    <div class="row text-start align-items-center main">
      <div class="col-sm-12">
        <Banner />
      </div>
      <div class="col-sm-12 bg-black">
        <BurguerForm />
      </div>
    </div>
</template>

<style scoped>
</style>

<script>
  import Banner from '@/components/Banner.vue';
  import BurguerForm from '@/components/BurguerForm.vue';

  export default{
    components:{
      Banner,
      BurguerForm,
    }
  }
</script>
