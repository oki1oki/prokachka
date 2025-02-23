import { get, set, del } from "idb-keyval";
import { StateStorage } from "zustand/middleware";

export const idbStorage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (await get(name)) || null;
	},
	setItem: async <T>(name: string, value: T): Promise<void> => {
		await set(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		await del(name);
	},
};
