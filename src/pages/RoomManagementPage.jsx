import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const adminRooms = [
  { roomId: 'room-1', building: 'Business Block', roomNumber: 'B201', capacity: 80, facilities: ['Projector', 'Whiteboard'], status: 'Available', assignedCP: 'Alice Mukamana' },
  { roomId: 'room-2', building: 'Business Block', roomNumber: 'B202', capacity: 60, facilities: ['Projector', 'AC'], status: 'Available', assignedCP: 'Jean de Dieu' },
  { roomId: 'room-3', building: 'Engineering Block', roomNumber: 'E105', capacity: 100, facilities: ['Projector', 'Whiteboard', 'AC'], status: 'Maintenance', assignedCP: 'Marie Claire' },
];

export default function RoomManagementPage() {
  const [rooms, setRooms] = useState(adminRooms);

  const statusClasses = {
    Available: 'bg-emerald-50 text-emerald-700',
    Maintenance: 'bg-amber-50 text-amber-700',
    Inactive: 'bg-slate-100 text-slate-700',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#003366]">Room Management</p>
          <h2 className="text-2xl font-semibold">Create and manage university rooms and buildings</h2>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-[#003366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#002a4d]">
          <Plus size={16} /> Create Room
        </button>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Building</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Room</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Capacity</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Facilities</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rooms.map((room) => (
              <tr key={room.roomId} className="hover:bg-slate-50">
                <td className="px-6 py-4">{room.building}</td>
                <td className="px-6 py-4 font-semibold">{room.roomNumber}</td>
                <td className="px-6 py-4">{room.capacity} students</td>
                <td className="px-6 py-4 text-xs">{room.facilities.join(', ')}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[room.status]}`}>{room.status}</span></td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"><Edit2 size={16} /></button>
                  <button className="p-2 hover:bg-rose-50 rounded-lg text-rose-500"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
