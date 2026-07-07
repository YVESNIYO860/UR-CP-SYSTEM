import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

const adminCps = [
  { uid: 'cp-001', name: 'Alice Mukamana', email: 'alice.mukamana@ur.ac.rw', class: 'BBA 3', assignedRoom: 'B201' },
  { uid: 'cp-002', name: 'Jean de Dieu', email: 'jean.dieu@ur.ac.rw', class: 'BIT 2', assignedRoom: 'C304' },
  { uid: 'cp-003', name: 'Marie Claire', email: 'marie.claire@ur.ac.rw', class: 'ENG 1', assignedRoom: 'E105' },
];

export default function CpManagementPage() {
  const [cps, setCps] = useState(adminCps);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#003366]">CP Management</p>
          <h2 className="text-2xl font-semibold">Create, edit, and manage CP accounts</h2>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-[#003366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#002a4d]">
          <Plus size={16} /> Create CP
        </button>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Name</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Email</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Class</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Assigned Room</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {cps.map((cp) => (
              <tr key={cp.uid} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">{cp.name}</td>
                <td className="px-6 py-4 text-slate-600">{cp.email}</td>
                <td className="px-6 py-4">{cp.class}</td>
                <td className="px-6 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003366]">{cp.assignedRoom}</span></td>
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
