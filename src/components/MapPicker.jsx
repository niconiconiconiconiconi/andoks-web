import { useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'

// Custom red teardrop pin via divIcon — sidesteps Leaflet's default marker
// PNGs, which break under bundlers without extra asset wiring.
const pinIcon = L.divIcon({
  className: 'andoks-pin',
  html: `<svg width="28" height="40" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 8.5 12 24 12 24s12-15.5 12-24C24 5.37 18.63 0 12 0z" fill="#BB0004"/>
    <circle cx="12" cy="12" r="4.5" fill="#F8F9FA"/>
  </svg>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
})

// Captures map clicks and lifts the new coordinate up.
function ClickCapture({ onPick }) {
  useMapEvents({ click: (e) => onPick(e.latlng.lat, e.latlng.lng) })
  return null
}

// Interactive OpenStreetMap picker. Draggable pin + click-to-place; reports
// lat/lng only (no reverse geocoding — out of scope). Local state lives in the
// parent so the address block stays in sync.
export default function MapPicker({ center, position, onPick }) {
  const markerRef = useRef(null)
  const handlers = useMemo(
    () => ({
      dragend() {
        const m = markerRef.current
        if (m) {
          const ll = m.getLatLng()
          onPick(ll.lat, ll.lng)
        }
      },
    }),
    [onPick],
  )

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ borderRadius: 12 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickCapture onPick={onPick} />
      <Marker
        draggable
        eventHandlers={handlers}
        position={[position.lat, position.lng]}
        icon={pinIcon}
        ref={markerRef}
      />
    </MapContainer>
  )
}
