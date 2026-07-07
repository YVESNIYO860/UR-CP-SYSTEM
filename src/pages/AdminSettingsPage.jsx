import { motion } from 'framer-motion';
import { Settings, Bell, Lock, Users, Building2, Mail, Save } from 'lucide-react';
import { useState } from 'react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('system');
  const [formData, setFormData] = useState({
    systemName: 'University of Rwanda CP System',
    email: 'admin@ur.ac.rw',
    maxBookingDays: 30,
    emailNotifications: true,
    systemNotifications: true,
    maintenanceMode: false,
    apiKey: 'sk_live_abc123xyz456',
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">System Settings</h2>
        <p className="text-black font-semibold">Manage system configuration and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b-2 border-blue-500 overflow-x-auto">
        {[
          { id: 'system', label: 'System', icon: Settings },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'security', label: 'Security', icon: Lock },
          { id: 'users', label: 'Users', icon: Users },
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 lg:px-6 py-3 font-bold text-sm lg:text-base border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-blue-900 text-black'
                  : 'border-transparent text-black hover:border-blue-400'
              }`}
            >
              <IconComponent size={18} className="lg:w-5 lg:h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* System Settings Tab */}
      {activeTab === 'system' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-black mb-6">General Settings</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm lg:text-base font-bold text-black mb-2">System Name</label>
                <input
                  type="text"
                  value={formData.systemName}
                  onChange={(e) => handleChange('systemName', e.target.value)}
                  className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block text-sm lg:text-base font-bold text-black mb-2">Admin Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block text-sm lg:text-base font-bold text-black mb-2">Maximum Booking Days in Advance</label>
                <input
                  type="number"
                  value={formData.maxBookingDays}
                  onChange={(e) => handleChange('maxBookingDays', e.target.value)}
                  className="w-full border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  checked={formData.maintenanceMode}
                  onChange={(e) => handleChange('maintenanceMode', e.target.checked)}
                  className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-blue-500 cursor-pointer"
                />
                <label htmlFor="maintenanceMode" className="text-sm lg:text-base font-bold text-black cursor-pointer">
                  Enable Maintenance Mode
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-black mb-6">Notification Preferences</h3>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 rounded-lg border-2 border-blue-500 bg-transparent">
                <div>
                  <p className="font-bold text-black text-sm lg:text-base">Email Notifications</p>
                  <p className="text-black font-semibold text-xs lg:text-sm">Receive booking updates via email</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.emailNotifications}
                  onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                  className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border-2 border-blue-500 bg-transparent">
                <div>
                  <p className="font-bold text-black text-sm lg:text-base">System Notifications</p>
                  <p className="text-black font-semibold text-xs lg:text-sm">Receive in-app system alerts</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.systemNotifications}
                  onChange={(e) => handleChange('systemNotifications', e.target.checked)}
                  className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-black mb-6">Security Settings</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm lg:text-base font-bold text-black mb-2">API Key</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={formData.apiKey}
                    onChange={(e) => handleChange('apiKey', e.target.value)}
                    className="flex-1 border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent text-black placeholder-slate-500 font-semibold outline-none focus:border-blue-700"
                  />
                  <button className="border-2 border-blue-500 rounded-lg px-4 py-3 lg:py-4 bg-transparent font-bold text-blue-600 hover:bg-blue-50 transition text-sm lg:text-base">
                    Regenerate
                  </button>
                </div>
              </div>

              <div className="bg-transparent border-2 border-blue-500 rounded-lg p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black mb-3">Two-Factor Authentication (2FA)</p>
                <button className="border-2 border-blue-500 rounded-lg px-6 py-2 lg:py-3 bg-transparent font-bold text-blue-600 hover:bg-blue-50 transition text-sm lg:text-base">
                  Enable 2FA
                </button>
              </div>

              <div className="bg-transparent border-2 border-blue-500 rounded-lg p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black mb-3">Recent Login Activity</p>
                <ul className="space-y-2">
                  <li className="text-black font-semibold text-sm lg:text-base">📍 Kigali - July 7, 2026 10:30 AM</li>
                  <li className="text-black font-semibold text-sm lg:text-base">📍 Kigali - July 6, 2026 3:45 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-black mb-6">User Management</h3>
            
            <div className="space-y-4">
              <button className="w-full border-2 border-blue-500 rounded-lg px-6 py-3 lg:py-4 bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base">
                + Add New User
              </button>

              <div className="space-y-3">
                {[
                  { name: 'Dr. Eric Nsanzimana', role: 'Administrator', email: 'eric@ur.ac.rw', status: 'Active' },
                  { name: 'Prof. Jean Murenzi', role: 'Administrator', email: 'jean@ur.ac.rw', status: 'Active' },
                  { name: 'Alice Mukamana', role: 'CP', email: 'alice@ur.ac.rw', status: 'Active' },
                ].map((user, idx) => (
                  <div key={idx} className="border-2 border-blue-500 rounded-lg p-4 lg:p-5 bg-transparent flex items-center justify-between">
                    <div>
                      <p className="font-bold text-black text-sm lg:text-base">{user.name}</p>
                      <p className="text-black font-semibold text-xs lg:text-sm">{user.email} • {user.role}</p>
                    </div>
                    <span className="px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-blue-100 text-blue-900 font-bold text-xs lg:text-sm">
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Save Button */}
      <div className="flex gap-3 justify-end">
        <button className="border-2 border-blue-500 rounded-lg px-6 py-3 lg:py-4 bg-transparent font-bold text-blue-600 hover:bg-blue-50 transition text-sm lg:text-base">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 border-2 border-blue-700 rounded-lg px-6 py-3 lg:py-4 bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm lg:text-base"
        >
          <Save size={18} className="lg:w-5 lg:h-5" />
          Save Changes
        </button>
      </div>

      {/* Success Message */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 rounded-lg bg-green-500 text-white font-bold px-6 py-3 lg:px-8 lg:py-4 shadow-lg"
        >
          ✓ Settings saved successfully!
        </motion.div>
      )}
    </div>
  );
}
