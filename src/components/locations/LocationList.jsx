import { MapPin, Trash2 } from "lucide-react";
import useDutyStore from "../../store/useDutyStore";

const LocationList = () => {
  const locations = useDutyStore((state) => state.locations);
  const assignPerson = useDutyStore((state) => state.assignPerson);
  const assignments = useDutyStore((state) => state.assignments);

  
  console.log(assignments)

  const onDropToLocation = async (e, locationId) =>{
    const personId = e.dataTransfer.getData('text/plain')

    await assignPerson(personId,locationId)
  }

  return (
    <div className="w-80 bg-white border-l shadow-lg border-gray-200">
      <div className="p-6 border-b border-gray-200 bg-blue-100">
        <div className="flex gap-4 items-center">
          <MapPin className="text-blue-500" size={32} />
          <h2 className="text-2xl font-semibold">จุดเข้าเวร</h2>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* loop */}
        {locations.map((item) => {
          return (
            <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDropToLocation(e, item.id) }
            key={item.id} className="border-2 border-dashed rounded-md border-gray-400 bg-gray-50">
              <div className="flex justify-between p-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">.../{item.maxCapacity}</p>
                </div>

                <button className="text-gray-500 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;
