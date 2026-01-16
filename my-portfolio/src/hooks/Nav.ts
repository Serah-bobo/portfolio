// src/hooks/useLockBody.ts
import { useEffect } from "react";

export function useLockBody(lock: boolean) {
  useEffect(() => {
    if (lock) {
      // Prevent scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [lock]);
}
