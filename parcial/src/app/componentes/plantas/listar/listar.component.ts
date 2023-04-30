import { Component, OnInit } from '@angular/core';
import { PlantasService } from 'src/app/servicios/plantas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  INTERIOR: string = "Interior";
  EXTERIOR: string = "Exterior";

  totales: any = {
    interior: 0,
    exterior: 0
  }

  plantas: any;

  constructor(private servicePlanta: PlantasService){  }

  ngOnInit(): void {
    this.servicePlanta.getPlantas().subscribe(
      {
        next: (plantas) => {
          this.totales.interior = plantas.filter(planta => planta.tipo == this.INTERIOR).length;
          this.totales.exterior = plantas.filter(planta => planta.tipo == this.EXTERIOR).length;
          this.plantas = plantas;
        },
        error: (error) => {
          console.error('ERROR: ' + error);
        }
      }
    );
  }


}
