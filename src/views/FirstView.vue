<template>
  <div>
   <CompoComponent></CompoComponent>
   <main class="content"> <h1>Listado Estudiantes</h1>
   <ButtomView @click="getAllStudents" label="Consultar Estudiantes"/>
   <ProgressBar v-show="showBarra" mode="indeterminate" style="height: 6px;"></ProgressBar>
   <DataTable :value="Students" table-style="min-width: 50rem">
   <ColumnView field="id" header="Codigo Estudiante"></ColumnView>
   <ColumnView field="nombre" header="Nombre Completo"></ColumnView>
   </DataTable>

  </main>
  </div>
</template>

<script>

import CompoComponent from '@/components/CompoComponent.vue';

export default {
     name: 'FirstView',

     data(){
        return{
            Students:[], 
            showBarra : false,
        }
     },

     methods: {
        //Creacion de metodos

        getAllStudents: async function() {
            this.showBarra = true;
            let url= "https://cobuses.com.co/APIV2/model/estudiante.php?dato=getallestudiantes";
            let vue=this;

            await this.axios.get(url)
            .then(function(response){
                vue.Students = response.data;
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function(){
                console.log("la peticion finalizo");
                vue.showBarra= false;
            })
        }
     },
     components: CompoComponent,

}
</script>

<style>
 
</style>