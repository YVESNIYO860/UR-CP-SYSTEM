import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { schools as initialSchools, colleges } from '../data/sampleData';

export default function SchoolManagementPage() {
  const [schools, setSchools] = useState(initialSchools);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    schoolId: '',
    collegeId: '',
    name: '',
    director: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddSchool = () => {
    if (!formData.name || !formData.collegeId || !formData.director) {
      alert('Please fill all fields');
      return;
    }

    if (editingId) {
      setSchools(schools.map((s) => (s.schoolId === editingId ? { ...formData, schoolId: editingId } : s)));
      setEditingId(null);
    } else {
      const newSchool = {
        schoolId: `school-${Date.now()}`,
        ...formData,
      };
      setSchools([...schools, newSchool]);
    }

    setFormData({ schoolId: '', collegeId: '', name: '', director: '' });
    setShowForm(false);
  };

  const handleEditSchool = (school) => {
    setFormData(school);
    setEditingId(school.schoolId);
    setShowForm(true);
  };

  const handleDeleteSchool = (schoolId) => {
    if (window.confirm('Are you sure you want to delete this school?')) {
      setSchools(schools.filter((s) => s.schoolId !== schoolId));
    }
  };

  const getCollegeName = (collegeId) => {
    return colleges.find((c) => c.collegeId === collegeId)?.name || 'Unknown';
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">School Management</h2>
        <p className="text-black font-semibold">Manage schools across all colleges</p>
      </div>

      {/* Add School Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ schoolId: '', collegeId: '', name: '', director: '' });
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 px-6 py-3 lg:py-4 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
        >
          <Plus size={20} className="lg:w-6 lg:h-6" />
          Add New School
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
        >
          <h3 className="text-lg lg:text-xl font-bold text-black mb-6">
            {editingId ? 'Edit School' : 'Add New School'}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">College</label>
              <select
                value={formData.collegeId}
                onChange={(e) => handleInputChange('collegeId', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black font-semibold outline-none focus:border-blue-700"
              >
                <option value="">Select College</option>
                {colleges.map((c) => (
                  <option key={c.collegeId} value={c.collegeId}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">School Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g., School of Finance and Banking"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Director Name</label>
              <input
                type="text"
                value={formData.director}
                onChange={(e) => handleInputChange('director', e.target.value)}
                placeholder="e.g., Dr. Claude Mwangi"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 lg:py-4 rounded-lg border-2 border-blue-500 bg-transparent text-blue-600 font-bold hover:bg-blue-50 transition text-sm lg:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleAddSchool}
              className="px-6 py-3 lg:py-4 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
            >
              {editingId ? 'Update School' : 'Add School'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Schools List */}
      <div className="space-y-3">
        {schools.map((school) => (
          <motion.div
            key={school.schoolId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={20} className="text-blue-600 lg:w-6 lg:h-6" />
                <h4 className="font-bold text-black text-sm lg:text-base">{school.name}</h4>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 text-xs lg:text-sm">
                <p className="text-black font-semibold">College: {getCollegeName(school.collegeId)}</p>
                <p className="text-black font-semibold">Director: {school.director}</p>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleEditSchool(school)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-lg border-2 border-blue-500 bg-transparent text-blue-600 font-bold hover:bg-blue-50 transition text-xs lg:text-sm"
              >
                <Edit2 size={16} className="lg:w-5 lg:h-5" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteSchool(school.schoolId)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-red-100 text-red-600 font-bold hover:bg-red-200 transition text-xs lg:text-sm"
              >
                <Trash2 size={16} className="lg:w-5 lg:h-5" />
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
