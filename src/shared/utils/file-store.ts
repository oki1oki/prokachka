import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "./idb-storage";

interface File {
	id: string;
	type: "img" | "video";
	blob: Blob;
}

interface FileStore {
	files: File[];
	addFile: (file: File) => void;
	getFile: (id: string) => File | undefined;
	removeFile: (id: string) => void;
}

export const useFileStore = create<FileStore>()(
	persist(
		(set, get) => ({
			files: [],
			addFile: (newFile) =>
				set((state) => {
					const existingIndex = state.files.findIndex(
						(f) => f.id === newFile.id
					);
					if (existingIndex !== -1) {
						const files = [...state.files];
						files[existingIndex] = newFile;
						return { files };
					}
					return { files: [...state.files, newFile] };
				}),

			getFile: (id) => get().files.find((f) => f.id === id),

			removeFile: (id) =>
				set((state) => ({
					files: state.files.filter((f) => f.id !== id),
				})),
		}),
		{
			name: "file-storage",
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
