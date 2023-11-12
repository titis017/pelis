const { createApp } = Vue;
import { getPelis } from "./comunicationManager.js";

createApp({

    data()  {
        return{
            datos: [],
        }
    },
    methods: {
        getInfoPeli(id){
            fetch("http://www.omdbapi.com/?i=${id}&plot=full&apikey=ef59fad")
            .then(response => response.json())
            .then(console.log(response));
        }
    },
    created(){
        getPelis().then(data =>  {
            this.datos=data
        }
     );
    }
}).mount("#app");
