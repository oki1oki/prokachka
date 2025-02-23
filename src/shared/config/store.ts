import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { BaseColor } from './themes';

interface ConfigStore {
	theme: BaseColor;
	setTheme: (theme: BaseColor) => void;
}

export const useConfigStore = create(
	persist<ConfigStore>(
		(set) => ({
			theme: 'yellow',
			setTheme: (theme: BaseColor) => set({ theme }),
		}),
		{
			name: 'config',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
