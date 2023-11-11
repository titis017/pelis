const { createApp } = Vue;
import { getPelis } from "./comunicationManager.js";

createApp({

    data(){
        datos : []
    },
    methods(){

    },
    created(){
        console.log("aaaaa")
        getPelis().then(data =>  {
            this.datos=data
         }
     );
    }
})
