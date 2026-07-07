import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, BookText } from 'lucide-react';
import { useState } from 'react';
import { departments as initialDepartments, schools, colleges } from '../data/sampleData';

export default function DepartmentManagementPage() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    deptId: '',
    schoolId: '',
    name: '',
    head: '',
    code: '',
  });

  const [selectedCollege, setSelectedCollege] = useState('');

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddDepartment = () => {
    if (!formData.name || !formData.schoolId || !formData.head || !formData.code) {
      alert('Please fill all fields');
      return;
    }

    if (editingId) {
      setDepartments(departments.map((d) => (d.deptId === editingId ? { ...formData, deptId: editingId } : d)));
      setEditingId(null);
    } else {
      const newDept = {
        deptId: `dept-${Date.now()}`,
        ...formData,
      };
      setDepartments([...departments, newDept]);
    }

    setFormData({ deptId: '', schoolId: '', name: '', head: '', code: '' });
    setShowForm(false);
  };

  const handleEditDepartment = (dept) => {
    setFormData(dept);
    setEditingId(dept.deptId);
    setShowForm(true);
  };

  const handleDeleteDepartment = (deptId) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      setDepartments(departments.filter((d) => d.deptId !== deptId));
    }
  };

  const getSchoolName = (schoolId) => {
    return schools.find((s) => s.schoolId === schoolId)?.name || 'Unknown';
  };

  const getCollegeName = (schoolId) => {
    const school = schools.find((s) => s.schoolId === schoolId);
    if (!school) return 'Unknown';
    return colleges.find((c) => c.collegeId === school.collegeId)?.name || 'Unknown';
  };

  const filteredSchools = selectedCollege
    ? schools.filter((s) => s.collegeId === selectedCollege)
    : schools;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">Department Management</h2>
        <p className="text-black font-semibold">Manage departments across all schools</p>
      </div>

      {/* Add Department Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ deptId: '', schoolId: '', name: '', head: '', code: '' });
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 px-6 py-3 lg:py-4 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
        >
          <Plus size={20} className="lg:w-6 lg:h-6" />
          Add New Department
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
            {editingId ? 'Edit Department' : 'Add New Department'}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">College</label>
              <select
                value={selectedCollege}
                onChange={(e) => {
                  setSelectedCollege(e.target.value);
                  handleInputChange('schoolId', '');
                }}
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
              <label className="block text-sm lg:text-base font-bold text-black mb-2">School</label>
              <select
                value={formData.schoolId}
                onChange={(e) => handleInputChange('schoolId', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black font-semibold outline-none focus:border-blue-700"
              >
                <option value="">Select School</option>
                {filteredSchools.map((s) => (
                  <option key={s.schoolId} value={s.schoolId}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Department Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g., Accounting"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Department Code</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => handleInputChange('code', e.target.value)}
                placeholder="e.g., ACC"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Department Head</label>
              <input
                type="text"
                value={formData.head}
                onChange={(e) => handleInputChange('head', e.target.value)}
                placeholder="e.g., Dr. Jean Paul Rutahigwa"
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
              onClick={handleAddDepartment}
              className="px-6 py-3 lg:py-4 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
            >
              {editingId ? 'Update Department' : 'Add Department'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Departments List */}
      <div className="space-y-3">
        {departments.map((dept) => (
          <motion.div
            key={dept.deptId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <BookText size={20} className="text-blue-600 lg:w-6 lg:h-6" />
                <div>
                  <h4 className="font-bold text-black text-sm lg:text-base">{dept.name}</h4>
                  <p className="text-xs lg:text-sm text-blue-600 font-bold">Code: {dept.code}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 text-xs lg:text-sm">
                <p className="text-black font-semibold">College: {getCollegeName(dept.schoolId)}</p>
                <p className="text-black font-semibold">School: {getSchoolName(dept.schoolId)}</p>
                <p className="text-black font-semibold">Head: {dept.head}</p>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleEditDepartment(dept)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-lg border-2 border-blue-500 bg-transparent text-blue-600 font-bold hover:bg-blue-50 transition text-xs lg:text-sm"
              >
                <Edit2 size={16} className="lg:w-5 lg:h-5" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteDepartment(dept.deptId)}
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
