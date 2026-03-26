import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  //js
  useEffect(() => {
    //fn body
    fecthAll();
  }, []);

  const fecthAll = async () => {
    try {
      const res = await axios.get("http://localhost:3000/personnel");
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
