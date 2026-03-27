import { MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const ClickToAdd = () => {
  useMapEvents({
    click(e){
      console.log(e.latlng);
      map.flyTo(e.latlng);
    }
  });
  return;
};

const MapView = ({ adding, onPick }) => {
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

        <ClickToAdd />
      </MapContainer>
    </div>
  );
};

export default MapView;
