import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
  //zustand การเข้าถึง store
  const personnel = useDutyStore((state) => state.personnel)
  console.log(personnel)

  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};

export default PersonelList;
