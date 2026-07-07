import { sampleNotifications } from '../data/sampleData';

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      {sampleNotifications.map((item) => (
        <div key={item.notificationId} className={`rounded-[20px] border p-5 shadow-sm ${item.read ? 'border-slate-200 bg-white' : 'border-[#003366]/20 bg-[#003366]/5'}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-600">{item.message}</p>
            </div>
            {!item.read && <span className="rounded-full bg-[#003366] px-3 py-1 text-xs font-semibold text-white">New</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
