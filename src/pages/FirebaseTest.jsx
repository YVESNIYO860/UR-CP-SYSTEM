import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import authService from '../services/authService';
import databaseService from '../services/databaseService';

export default function FirebaseTest() {
  const [loading, setLoading] = useState(true);
  const [userResult, setUserResult] = useState(null);
  const [roomsResult, setRoomsResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const user = await authService.getCurrentUser();
        if (!mounted) return;
        setUserResult(user || null);
      } catch (err) {
        if (!mounted) return;
        setError((e) => (e ? e + '\n' + err.message : err.message));
      }

      try {
        const rooms = await databaseService.getAllRooms();
        if (!mounted) return;
        setRoomsResult(rooms);
      } catch (err) {
        if (!mounted) return;
        setError((e) => (e ? e + '\n' + err.message : err.message));
      }

      setLoading(false);
    })();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen p-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto rounded-lg border-2 border-blue-500 bg-transparent p-6">
        <h1 className="text-2xl font-bold text-black mb-4">Firebase Connection Test</h1>
        <p className="text-sm text-black mb-4">This page checks authentication state and fetches all rooms from the Realtime Database.</p>

        {loading && <p className="text-sm text-black">Running tests... please wait (up to 15s)</p>}

        {error && (
          <div className="mt-4 p-3 rounded border-2 border-red-500 bg-transparent">
            <p className="font-bold text-red-600">Error</p>
            <pre className="whitespace-pre-wrap text-sm text-red-600">{String(error)}</pre>
          </div>
        )}

        <div className="mt-4 grid gap-4">
          <div className="rounded-lg border-2 border-blue-500 p-4 bg-transparent">
            <p className="font-bold text-black">Auth Current User</p>
            <pre className="text-sm text-black mt-2">{userResult ? JSON.stringify(userResult, null, 2) : 'No user signed in'}</pre>
          </div>

          <div className="rounded-lg border-2 border-blue-500 p-4 bg-transparent">
            <p className="font-bold text-black">Rooms (sample)</p>
            <pre className="text-sm text-black mt-2">{roomsResult ? JSON.stringify(roomsResult, null, 2) : 'No rooms returned'}</pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
