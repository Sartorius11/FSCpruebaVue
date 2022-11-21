import { createRouter,createWebHistory } from "vue-router"; 
import HomeComponent from './components/HomeComponent.vue';
import MarcasComponent from './components/MarcasComponent.vue';

const routes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/marcas/:marca", component: MarcasComponent
            
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;
