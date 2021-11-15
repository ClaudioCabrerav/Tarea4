import { Route } from "@angular/router";
/* import { ListaProductosComponent } from "./subpaginas/lista-productos/lista-productos.component"; */

export const MOD_USUARIO_USUARIO_ROUTES: Route[] = [
  {
    path: 'lista',
    loadChildren: () => import('./subpaginas/listar-usuarios/listar-usuarios.module').then(m => m.ListarUsuariosModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./subpaginas/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioModule)
  }
]