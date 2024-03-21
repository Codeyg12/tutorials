import React, { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext();

export default function FeatureFlagGlobal({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    setLoading(true);
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
