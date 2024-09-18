<template>
  <div>
    <HeaderComp></HeaderComp>
    <MainContent></MainContent>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainContent from '@/components/MainContent.vue';
export default {
   components:{FooterComp,HeaderComp,MainContent},
    name:'SecondView'
}
</script>

<style>

</style>