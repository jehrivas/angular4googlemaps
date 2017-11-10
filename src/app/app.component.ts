import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-inferrable-types
  lat: number = 13.723151;
  lng: number = -89.131600;
  zoom: number =  16;

  marcadorSel: any = null;

  draggable: string = '1';

  constructor ( public _ms: MapasService ) {

    this._ms.cargarMarcadores();

  }
  clickMapa ( evento ) {

    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
  };

  this._ms.insertarMarcador( nuevoMarcador );

    console.log( evento );
  }

  clickMarcador( marcador: Marcador, i: number ) {

    console.log( marcador, i);
    this.marcadorSel = marcador;

  }

  dragEndMarcador( marcador: Marcador, evento) {

    console.log( marcador, evento );
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();
  }

  cambiarDraggable () {
    console.log(this.draggable);
    if ( this.draggable === "1"  ) {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }


}
