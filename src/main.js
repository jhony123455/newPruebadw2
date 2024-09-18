import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import clases

import axios  from 'axios';
import VueAxios from 'vue-axios';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';




//constante 

const app = createApp(App).use(router);


app.component('ButtomView', Button);
app.component('DataTable',DataTable);
app.component('ColumnView',Column);
app.component('ProgressBar',ProgressBar);


//uso de librerias

app.use(VueAxios,axios);
app.use(PrimeVue,{
    theme:{
        preset:Aura
    }
});

app.mount('#app')

export{app};
