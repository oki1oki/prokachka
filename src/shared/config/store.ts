import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { BaseColor } from './themes';

interface ConfigStore {
	theme: BaseColor;
	mode: 'light' | 'dark' | 'system';
	setTheme: (theme: BaseColor) => void;
	setMode: (mode: 'light' | 'dark' | 'system') => void;
}

export const useConfigStore = create(
	persist<ConfigStore>(
		(set) => ({
			theme: 'yellow',
			mode: 'system',
			setTheme: (theme) => set({ theme }),
			setMode: (mode) => set({ mode }),
		}),
		{
			name: 'config',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
