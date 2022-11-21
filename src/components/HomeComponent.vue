<template>
    <div>
        <h1>Cubos Home</h1>
       <div v-if="status == false">
            <img src="./../assets/loading.gif"/>
        </div>

        <table class="table table-bordered table-warning">
            <thead>
                <tr>
                    <th>idCubo</th>
                    <th>nombre</th>
                    <th>modelo</th>
                    <th>marca</th>
                    <th>color</th>
                    <th>imagen</th>
                    <th>precio</th>
                    <th>valoracion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cu in cubos" :key="cu.idCubo">
                    <td>{{cu.idCubo}}</td>
                    <td>{{cu.nombre}}</td>
                    <td>{{cu.modelo}}</td>
                    <td>{{cu.marca}}</td>
                    <td>{{cu.color}}</td>
                    <img :src="cu.imagen" style="width: 150px; height: 150px"/>
                    <td>{{cu.precio}}</td>
                    <td>{{cu.valoracion}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
import ServiceCubo from './../services/ServiceCubo';
const service = new ServiceCubo();
export default {
    name:"HomeComponent",
    data(){
        return{
            cubos:[],
            status: false
        }
    },
    mounted(){
        service.getCubos().then(result=>{
            this.cubos= result;
            this.status = true;
        });
    }
}
</script>
<style>
    
</style>