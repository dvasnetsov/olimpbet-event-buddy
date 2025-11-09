import React, { createContext, useContext, useState } from "react";

type UserMode = "promoter" | "supervisor";

interface UserModeContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  isSupervisor: boolean;
}

const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

export const UserModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<UserMode>("promoter");

  return (
    <UserModeContext.Provider value={{ 
      mode, 
      setMode,
      isSupervisor: mode === "supervisor" 
    }}>
      {children}
    </UserModeContext.Provider>
  );
};

export const useUserMode = () => {
  const context = useContext(UserModeContext);
  if (!context) {
    throw new Error("useUserMode must be used within UserModeProvider");
  }
  return context;
};
