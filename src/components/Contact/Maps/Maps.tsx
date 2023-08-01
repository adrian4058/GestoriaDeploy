import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps: React.FC = () => {
  return (
    
      <MapContainer
        className="md:w-full md:h-full py-60"
        center={[-30.95102, -61.5632]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-30.950919, -61.56296]}>
          <Popup>
            Pasillo interno <br /> Última casa a la izquierda.
          </Popup>
        </Marker>
      </MapContainer>
    
  );
};

export default Maps;
