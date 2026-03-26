import { create } from "zustand";

const dutyStore = () => ({
  personnel: [],
  name: "Mark",
  lee: () => console.log("Mark Lee"),
});

const useDutyStore = create(dutyStore);

export default useDutyStore;