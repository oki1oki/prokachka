import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { idbStorage } from '@/shared/utils/idb-storage';
import { Exercise } from './models';

interface ExerciseStore {
	exercises: Exercise[];
	isEditModalOpen: boolean;
	currentExercise: Exercise | null;
	addExercise: (exercise: Exercise) => void;
	updateExercise: (id: string, data: Partial<Exercise>) => void;
	deleteExercise: (id: string) => void;
	getExercise: (id: string) => Exercise | undefined;
	toggleEditModal: (exercise: Exercise) => void;
}

export const useExerciseStore = create<ExerciseStore>()(
	persist(
		(set, get) => ({
			exercises: [],
			isEditModalOpen: false,
			currentExercise: null,

			addExercise: (exercise: Exercise) =>
				set((state) => ({
					exercises: [...state.exercises, exercise],
				})),

			updateExercise: (id, data) =>
				set((state) => ({
					exercises: state.exercises.map((exercise) =>
						exercise.id === id ? { ...exercise, ...data } : exercise
					),
				})),

			deleteExercise: (id) =>
				set((state) => ({
					exercises: state.exercises.filter(
						(exercise) => exercise.id !== id
					),
				})),

			getExercise: (id) =>
				get().exercises.find((exercise) => exercise.id === id),

			toggleEditModal: (exercise) =>
				set((state) => ({
					isEditModalOpen: !state.isEditModalOpen,
					currentExercise: exercise,
				})),
		}),
		{
			name: 'exercise-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
