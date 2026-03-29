import {
  MapContainer,
  Marker,
  Popup,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";
import useDutyStore from "../../store/useDutyStore";

const ClickToAdd = ({ adding, onPick }) => {
  useMapEvents({
    click(e) {
      if (adding) onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return;
};

const MapView = ({ adding, onPick }) => {
  const location = useDutyStore((s) => s.locations);

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

        <ClickToAdd adding={adding} onPick={onPick} />

        {location.map((item) => {
          return (
            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                <div className="text-xl">{item.name}</div>
                <div className="text-s mt-2 text-gray-500">
                  {item.lat},{item.lng}
                </div>
              </Popup>
              <Tooltip direction="top">
                <div className="text-xl">{item.name}</div>
                <div className="text-s mt-2 text-gray-500">
                  {item.lat},{item.lng}
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
