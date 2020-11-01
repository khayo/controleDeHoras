import { Routes } from "@angular/router";
import { CadastrarHoraComponent } from './cadastrar';
import { EditarHoraComponent } from './editar';
import { ListarHoraComponent } from "./listar";

export const HorasRoutes: Routes = [
    {
        path: 'horas',
        redirectTo: 'horas/listar'
    },
    {
        path: 'horas/listar',
        component: ListarHoraComponent
    },
    {
        path: 'horas/cadastrar',
        component: CadastrarHoraComponent
    },
    {
        path: "horas/editar/:id",
        component: EditarHoraComponent
    }
]; 