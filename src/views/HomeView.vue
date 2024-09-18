<template>
  <div class="home">
    <CompoComponent></CompoComponent>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import CompoComponent from '@/components/CompoComponent.vue';
export default {
  name: 'HomeView',
  components: {
      CompoComponent
  }
}
</script>
