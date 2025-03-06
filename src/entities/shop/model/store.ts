import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { idbStorage } from '@/shared/utils/idb-storage';
import { ShopItem } from './models';

interface ShopStore {
	items: ShopItem[];
	addItem: (item: ShopItem) => void;
	updateItem: (id: string, data: Omit<ShopItem, 'id'>) => void;
}

export const useShopStore = create(
	persist<ShopStore>(
		(set) => ({
			items: [],
			addItem: (item) =>
				set((state) => ({ items: [...state.items, item] })),
			updateItem: (id, data) =>
				set((state) => ({
					items: state.items.map((item) =>
						item.id === id ? { ...item, ...data } : item
					),
				})),
		}),
		{
			name: 'shop-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
