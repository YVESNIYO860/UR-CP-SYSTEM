import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, BookOpen, Briefcase, MapPin, Save } from 'lucide-react';
import { useState } from 'react';
import { sampleUser } from '../data/sampleData';

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: sampleUser.name,
    email: sampleUser.email,
    phone: sampleUser.phone,
    assignedRoom: 'Business Block • B201',
    yearOfStudy: 3,
    college: sampleUser.college,
    school: sampleUser.school,
    department: sampleUser.department,
    programme: sampleUser.programme,
    academicYear: sampleUser.academicYear,
    class: sampleUser.class,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img 
            src={sampleUser.photo} 
            alt={sampleUser.name} 
            className="h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover border-2 border-blue-500" 
          />
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-black">{formData.name}</h1>
            <p className="text-black font-semibold text-sm lg:text-base mt-1">{formData.class} • {formData.programme}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-blue-100 text-blue-900 font-bold text-xs lg:text-sm">
                {formData.college}
              </span>
              <span className="px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-blue-100 text-blue-900 font-bold text-xs lg:text-sm">
                Year {formData.yearOfStudy}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Info Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">Email</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">{formData.email}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <Phone size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">Phone</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">{formData.phone}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <Building2 size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">Assigned Room</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">{formData.assignedRoom}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">Year of Study</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">Year {formData.yearOfStudy}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">Department</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">{formData.department}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            <p className="text-xs lg:text-sm font-bold text-black">School</p>
          </div>
          <p className="font-bold text-black text-sm lg:text-base">{formData.school}</p>
        </motion.div>
      </div>

      {/* Academic Details */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
      >
        <h2 className="text-lg lg:text-xl font-bold text-black mb-4">Academic Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">College</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.college}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">School</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.school}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">Department</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.department}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">Programme</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.programme}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">Academic Year</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.academicYear}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
            <p className="text-xs lg:text-sm font-bold text-black mb-2">Class</p>
            <p className="font-bold text-black text-sm lg:text-base">{formData.class}</p>
          </div>
        </div>
      </motion.div>

      {/* Edit Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg lg:text-xl font-bold text-black">Update Profile</h2>
          {!editMode && (
            <button 
              onClick={() => setEditMode(true)}
              className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
            >
              Edit Profile
            </button>
          )}
        </div>

        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Assigned Room</label>
              <input
                type="text"
                value={formData.assignedRoom}
                onChange={(e) => handleChange('assignedRoom', e.target.value)}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-bold text-black mb-2">Year of Study</label>
              <select
                value={formData.yearOfStudy}
                onChange={(e) => handleChange('yearOfStudy', parseInt(e.target.value))}
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black font-semibold outline-none focus:border-blue-700"
              >
                <option value={1}>Year 1</option>
                <option value={2}>Year 2</option>
                <option value={3}>Year 3</option>
                <option value={4}>Year 4</option>
              </select>
            </div>

            <div className="flex gap-3 justify-end pt-4">
              <button 
                onClick={() => setEditMode(false)}
                className="px-6 py-3 lg:py-4 rounded-lg border-2 border-blue-500 bg-transparent text-blue-600 font-bold hover:bg-blue-50 transition text-sm lg:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 lg:py-4 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
              >
                <Save size={18} className="lg:w-5 lg:h-5" />
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <p className="text-black font-semibold text-sm lg:text-base">Click "Edit Profile" to update your information</p>
        )}
      </motion.div>
    </div>
  );
}
