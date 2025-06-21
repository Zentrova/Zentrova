// components/OfflineBanner.js
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

const OfflineBanner = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="bg-red-600 text-white text-center py-2 fixed top-0 w-full z-50">
      🚫 You are currently offline
    </div>
  );
};

export default OfflineBanner;
