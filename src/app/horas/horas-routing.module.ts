import { Routes } from "@angular/router";
import { ListarHoraComponent } from "./listar";

export const HorasRoutes: Routes = [
    {
        path: 'horas',
        redirectTo: 'horas/listar'
    },
    {
        path: 'horas/listar',
        component: ListarHoraComponent
    }
]; 