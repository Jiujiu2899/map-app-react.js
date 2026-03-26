import { create } from "zustand";

const dutyStore = () => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,
});

const useDutyStore = create(dutyStore);

export default useDutyStore;