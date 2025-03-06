import { v4 as uuid4 } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { idbStorage } from '@/shared/utils/idb-storage';
import { Exercise } from './models';

interface ExerciseStore {
	exercises: Exercise[];

	addExercise: (data: Omit<Exercise, 'id'>) => void;
	updateExercise: (id: string, data: Partial<Exercise>) => void;
	deleteExercise: (id: string) => void;
	getExercise: (id: string) => Exercise | undefined;
}

export const useExerciseStore = create(
	persist<ExerciseStore>(
		(set, get) => ({
			exercises: [],
			currentExerciseId: '',
			isInfoModalOpen: false,
			isEditModalOpen: false,

			addExercise: (data) =>
				set((state) => ({
					exercises: [
						...state.exercises,
						{
							id: uuid4(),
							...data,
						},
					],
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
		}),
		{
			name: 'exercise-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
