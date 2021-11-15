import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
/* import { ListarUsuariosComponent } from './subpaginas/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './subpaginas/crear-usuario/crear-usuario.component'; */
import { RouterModule } from '@angular/router';
import { MOD_USUARIO_USUARIO_ROUTES } from './usuarios.routing';



@NgModule({
  declarations: [
    UsuariosComponent/* ,
    ListarUsuariosComponent,
    CrearUsuarioComponent */
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOD_USUARIO_USUARIO_ROUTES)
  ]
})
export class UsuariosModule { }
