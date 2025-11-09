import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [-156.507, 20.893], // Palihua Golf Club coordinates
        zoom: 16,
        pitch: 60,
        bearing: -17.6,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add 3D buildings
      map.current.on('load', () => {
        if (!map.current) return;
        
        map.current.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        });

        // Add marker at golf club
        new mapboxgl.Marker({ color: '#10b981' })
          .setLngLat([-156.507, 20.893])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3 style="font-weight: bold; margin: 0;">Palihua Golf Club</h3>')
          )
          .addTo(map.current);
      });

      // Smooth rotation animation
      let userInteracting = false;
      const rotateCamera = () => {
        if (!map.current || userInteracting) return;
        map.current.rotateTo((map.current.getBearing() + 0.5) % 360, { duration: 1000 });
      };

      map.current.on('mousedown', () => { userInteracting = true; });
      map.current.on('mouseup', () => { userInteracting = false; });
      map.current.on('dragstart', () => { userInteracting = true; });
      map.current.on('dragend', () => { userInteracting = false; });

      const rotationInterval = setInterval(rotateCamera, 1000);

      return () => {
        clearInterval(rotationInterval);
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-xl border border-border">
        <div className="max-w-md w-full p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Vista Interactiva de Campo de Golf</h3>
            <p className="text-sm text-muted-foreground">
              Ingresá tu token de Mapbox para ver el mapa 3D interactivo
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Obtené tu token gratuito en{' '}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border border-border">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm font-semibold">Palihua Golf Club</p>
        <p className="text-xs text-muted-foreground">Vista 3D Interactiva</p>
      </div>
    </div>
  );
};