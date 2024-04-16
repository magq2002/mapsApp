import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';


@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;


  ngAfterViewInit(){
    if ( !this.divMap?.nativeElement ) throw "Map Div not found";
    if ( !this.lngLat ) throw "LngLat can't be null";

    this.map = new Map({
      container: this.divMap.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
  });

  new Marker()
    .setLngLat( this.lngLat )
    .addTo( this.map )
  }
}
