import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, 
      style: 'mapbox://styles/magq2002/cluwtjzex00eq01pk9hxf60z9/draft',
      center: this.currentLngLat,
      zoom: 10,
  });

  const marker = new Marker()
    .setLngLat( this.currentLngLat )
    .addTo( this.map );

  }
  
}
