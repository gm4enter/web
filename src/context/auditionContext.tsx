// context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DataAuditionContextType } from '../types/dataAuditionContext';

interface AuditionContextType {
  data: DataAuditionContextType;
  setData: React.Dispatch<React.SetStateAction<DataAuditionContextType>>;
}

export const AuditionContext = createContext<AuditionContextType | undefined>(undefined);

export const useAuditionContext = () => {
  const context = useContext(AuditionContext);
  if (!context) {
    throw new Error('useAuditionContext must be used within an AuditionContextProvider');
  }
  return context;
};

interface AuditionContextProviderProps {
  children: ReactNode;
}

export const AuditionContextProvider: React.FC<AuditionContextProviderProps> = ({ children }) => {
    const initialData: DataAuditionContextType = {
        step: 1,
        curentStepSave: 1,
      };
  const [data, setData] = useState<DataAuditionContextType>(initialData);

  return (
    <AuditionContext.Provider value={{ data, setData }}>
      {children}
    </AuditionContext.Provider>
  );
};
