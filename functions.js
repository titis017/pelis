const { createApp } = Vue;
import { getPelis } from "./comunicationManager.js";

createApp({

    data()  {
        return{
            datos: [],
        }
    },
    methods: {

    },
    created(){
        getPelis().then(data =>  {
            this.datos=data
        }
     );
    }
}).mount("#app");
