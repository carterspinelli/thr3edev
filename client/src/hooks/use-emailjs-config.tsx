import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  configured: boolean;
}

interface EmailJSConfigStore {
  config: EmailJSConfig;
  setConfig: (config: Partial<EmailJSConfig>) => void;
  resetConfig: () => void;
}

// Estado inicial
const initialState: EmailJSConfig = {
  serviceId: '',
  templateId: '',
  publicKey: '',
  configured: false
};

// Crear el almacén persistente
export const useEmailJSConfig = create<EmailJSConfigStore>()(
  persist(
    (set) => ({
      config: initialState,
      setConfig: (newConfig) => 
        set((state) => ({ 
          config: { 
            ...state.config, 
            ...newConfig,
            configured: true 
          } 
        })),
      resetConfig: () => set({ config: initialState }),
    }),
    {
      name: 'emailjs-config', // nombre para localStorage
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useEmailJSConfig;