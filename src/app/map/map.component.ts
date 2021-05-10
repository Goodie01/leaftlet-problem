import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: '<div id="map" style="height: 70em; width: 70em"></div>',
  styleUrls: [
    '../../../node_modules/leaflet/dist/leaflet.css'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  constructor() {
  }

  ngOnInit(): void {
    this.map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
    });

    this.createMarkers({lat: 0, lng: 0})
    this.createMarkers({lat: 5, lng: 0})
    this.createMarkers({lat: -5, lng: 0})
    this.createMarkers({lat: 0, lng: 5})
    this.createMarkers({lat: 0, lng: -5})

    this.map.setView([0, 0], 4);
  }

  private createMarkers(latLang: L.LatLngExpression) {
    L.marker(latLang).addTo(this.map);
    L.circle(latLang, {radius: 800, color: 'red'}).addTo(this.map);
  }
}
