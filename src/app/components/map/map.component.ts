import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoogleMapsService } from 'src/app/services/google-maps/google-maps.service';
import { Loader } from '@googlemaps/js-api-loader';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElementRef: ElementRef | undefined
  googleMaps: any;
  map: google.maps.Map | undefined;
  marker: any;
  @Input() update = false;
  @Input() center = { lat: 28.649944693035188, lng: 77.23961776224988 };
  mapListener: any;
  mapChange: Subscription | undefined = undefined;

  isMobile: boolean = window.innerWidth <= 768;

  constructor(
    private maps: GoogleMapsService,
    private renderer: Renderer2,
    ) { }

    mapOptions = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 4
    };

    ngOnInit () {
    let loader = new Loader({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      libraries: ["places"]
    })

    Geolocation.getCurrentPosition().then((location) => {
      loader.importLibrary('maps').then(({Map}) => {
        console.log("loaded map")
        const mapDiv = document.getElementById("map")
        console.log("mapDiv")
        console.log(mapDiv)
  
        this.map = new google.maps.Map(mapDiv!, {
          center: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          },
          zoom: 18,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: this.isMobile ? false : true,
        });
  
        const marker = new google.maps.Marker({
          position: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          },
          map: this.map,
          //title: "Hello World!"
        })
        
  
      }).catch((err) => {
        console.log(err);
      })
    })

    
  }

  // async ngAfterViewInit() {
  //   await this.initMap();
  //   this.mapChange = this.maps.markerChange.subscribe(async(loc) => {
  //     if(loc?.lat) {
  //       console.log('loc: ', loc);
  //       console.log('maps: ', this.googleMaps);
  //       const googleMaps = this.googleMaps;
  //       const location = new googleMaps.LatLng(loc.lat, loc.lng);
  //       this.map.panTo(location);
  //       this.marker.setMap(null);
  //     }
  //   });    
  // }

  // async initMap() {
  //   try {
  //     if(!this.update) {
  //       const position = await Geolocation.getCurrentPosition();
  //       this.center = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       await this.loadMap();
  //     } else {
  //       await this.loadMap();
  //     }
  //   } catch(e) {
  //     console.log(e);
  //     this.center = { lat: 28.649944693035188, lng: 77.23961776224988 };
  //     console.log(this.center);
  //     this.loadMap();
  //   }
  // }

  // async loadMap() {
  //   try {
  //     let googleMaps: any = await this.maps.loadGoogleMaps();
  //     this.googleMaps = googleMaps;
  //     const style = [
  //       {
  //         featureType: 'all',
  //         elementType: 'all',
  //         stylers: [
  //           { saturation: -100 }
  //         ]
  //       }
  //     ];
  //     const mapEl = this.mapElementRef?.nativeElement;
  //     const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
  //     this.map = new googleMaps.Map(mapEl, {
  //       center: location,
  //       zoom: 15,
  //       scaleControl: false,
  //       streetViewControl: false,
  //       zoomControl: false,
  //       overviewMapControl: false,
  //       mapTypeControl: false,
  //       mapTypeControlOptions: {
  //         mapTypeIds: [googleMaps.MapTypeId.ROADMAP, 'SwiggyClone']
  //       }
  //     });
  //     var mapType = new googleMaps.StyledMapType(style, { name: 'Grayscale' });
  //     this.map.mapTypes.set('SwiggyClone', mapType);
  //     this.map.setMapTypeId('SwiggyClone');
  //     this.renderer.addClass(mapEl, 'visible');
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }

  // ngOnDestroy() {
  //   if(this.mapListener) this.googleMaps.event.removeListener(this.mapListener);
  //   if(this.mapChange) this.mapChange.unsubscribe();
  // }

}
