import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ListarUsuariosComponent}
    ])
  ]
})
export class ListarUsuariosModule { }
