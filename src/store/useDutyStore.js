import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set, get) => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try {
      // const personnel = await api.get("/personnel");
      // const locations = await api.get("/locations");
      // const assignments = await api.get("/locationPersonnel");

      const [personnel,locations, assignments] = await Promise.all([
        api.get("/personnel"),
        api.get("/locations"),
        api.get("/locationPersonnel"),
      ]);

      // console.log('allPromise', allPromise[1])

      set({
        personnel: personnel,
        locations: locations,
        assignments: assignments,
      });
    } catch (err) {
      console.log("fetchAll err");
    }
  },

  addLocation: async (lat, lng, name) => {
    try {
      const res = await api.post("/locations", {
        name: name,
        lat: Number(lat),
        lng: Number(lng),
        maxCapacity: 5,
      });

      await get().fetchAll();
    } catch (err) {
      console.log("AddLLocation Err", err);
    }
  },

  assignPerson: async (personId, locationId) => {
    try {
      console.log(personId, locationId);
      const res = await api.post("/locationPersonnel", {
        personId,
        locationId,
      });
    } catch (err) {
      console.log(err);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
