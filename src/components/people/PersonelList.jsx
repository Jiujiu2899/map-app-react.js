import useDutyStore from "../../store/useDutyStore";
import { UsersRound, Clock8 } from "lucide-react";

const PersonelList = () => {
  //zustand การเข้าถึง store
  const personnel = useDutyStore((state) => state.personnel);
  
  const onDragStart = (e, personId) => {
    
    e.dataTransfer.setData("text/plain", personId)
  }

  return (
    <div className="w-80 bg-white overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex item-center gap-3 mb-2">
          <UsersRound className="text-blue-500" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">
            รายชื่อเจ้าหน้าที่
          </h2>
        </div>
        <p className="text-sm text-gray-500">ลากไปยังจุด</p>
      </div>

      <div className="p-4 space-y-2">
        {personnel.map((item) => {
          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => onDragStart(e, item.id)}
              className="flex items-center gap-3 p-3 bg-blue-100 border border-blue-300 rounded-lg cursor-move hover:shadow-md hover:scale-105"
            >
              <div className="text-3xl">{item.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.position}</div>
              </div>
              <div className="text-gray-400">
                <Clock8 />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonelList;
