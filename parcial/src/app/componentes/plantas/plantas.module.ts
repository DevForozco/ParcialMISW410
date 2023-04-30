import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListarComponent],
  declarations: [ListarComponent]
})
export class PlantasModule { }
