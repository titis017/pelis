const { createApp } = Vue;
import { getPelis } from "./comunicationManager.js";

createApp({

    data()  {
        return{
            datos: [],
            detPeli: [],
        }
    },
    methods: {
        getInfoPeli(id) {
            const apiUrl = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=ef59fad`;
          
            return fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                this.detPeli = data;
              })
              .catch(error => {
                console.error('Error:', error);
                throw error; 
              });
          }
    },
    created(){
        getPelis().then(data =>  {
            this.datos=data
        }
     );
    }
}).mount("#app");
