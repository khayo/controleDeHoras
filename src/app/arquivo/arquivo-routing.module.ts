import { Routes } from '@angular/router';
import { ArquivoModule } from './arquivo.module';
import { CriarArquivoComponent } from './criar';
import { ListarArquivoComponent } from './listar';

export const ArquivoRoutes: Routes = [

    {
        path: 'arquivo/listar',
        component: ListarArquivoComponent
    },
    {
        path: 'arquivo/criar',
        component: CriarArquivoComponent
    },
];