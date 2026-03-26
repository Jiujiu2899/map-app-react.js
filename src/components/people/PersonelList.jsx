import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
  //zustand การเข้าถึง store
  const markLee = useDutyStore((state) => state.name)
  console.log(markLee)

  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};

export default PersonelList;
