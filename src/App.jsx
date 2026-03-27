import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import axios from "axios";
import { useEffect, useState } from "react";
import useDutyStore from "./store/useDutyStore";

const App = () => {
  //js

  const [adding, setAdding] = useState(false);

  const fetchAll = useDutyStore((state) => state.fetchAll);

  useEffect(() => {
    //fn body
    fetchAll();
  },[]);

  const onPick = (lat,lng) => {
    console.log(lat,lng)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />

        <div className="flex flex-1 overflow-hidden">
          <MapView adding={adding} onPick={onPick}/>
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
