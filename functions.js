const { createApp } = Vue;
import { getPelis } from "./comunicationManager.js";

createApp({

    data()  {
        return{
            datos: [],
            detPeli: [],
            buscarPelis: [],
            buscar: "",
            actual: "",
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
        },
        buscarPeli(cont){
          if (cont == "") {
            this.actual = "";
          }else{
            const apiUrl = `http://www.omdbapi.com/?s=${cont}&apikey=ef59fad&type=movie`;
            return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              if (data.Response == "False") {
                this.actual = "error"
              }else{
                this.actual = "buscar";
                this.buscarPelis = data.Search;
                console.log(data);
              }
              
            })
            .catch(error => {
              console.error('Error:', error);
              throw error; 
            });
      }
          }
          
    },
    created(){
        getPelis().then(data =>  {
            this.datos=data
        }
     );
    },
    
}).mount("#app");
