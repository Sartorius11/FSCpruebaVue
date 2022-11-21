import Global from './../Global';
import axios from 'axios';
export default class ServiceCubo {

    //obtengo todos los cubos 
    getCubos() {
        return new Promise(function(resolve) {
            var request = "/api/Cubos";
            var url = Global.urlApicubos + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            });
        });
    }

   
   

    //carga en el navbar la marca de los cubos
    loadSelect(){
        return new Promise(function(resolve){
            var request = "/api/Cubos/";
            var url = Global.urlApicubos + request;
            var marcas = [];
            axios.get(url).then(res=>{
                marcas = res.data;
                resolve(marcas);
            });
        });
    }


        //cargar los cubos de la marca dentro de MarcasComponent
        loadCubo(marca){
            return new Promise(function(resolve){
                var request = "/api/Cubos/CubosMarca/" + marca;
                var url = Global.urlApicubos + request;
                var cubo = {};
                axios.get(url).then(res=>{
                    cubo = res.data;
                    resolve(cubo);
                });
            });
        }


       
    
}
