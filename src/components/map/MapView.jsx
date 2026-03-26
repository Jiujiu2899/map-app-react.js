import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const MapView = () => {
  const center = [13, 100];

  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={center}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layers />
      </MapContainer>
    </div>
  );
};

export default MapView;
