// components/OfflineBanner.js
'use client'
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

const OfflineBanner = () => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div className="bg-red-500 text-white text-center py-1 fixed bottom-0 w-full z-50">
      🚫 You are currently offline
    </div>
  );
};

export default OfflineBanner;
