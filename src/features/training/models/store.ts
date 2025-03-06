import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useAccountStore } from '@/entities/account';
import { idbStorage } from '@/shared/utils/idb-storage';
import { Training, EndTrainingData, UserTraining } from './models';

interface TrainingStore {
	trainings: Training[];
	userTrainings: UserTraining[];

	addTraining: (data: Omit<Training, 'id'>) => void;
	updateTraining: (id: string, data: Partial<Training>) => void;
	deleteTraining: (id: string) => void;
	startTraining: (id: string) => void;
	endTraining: (id: string, data: EndTrainingData) => void;
}

export const useTrainingStore = create(
	persist<TrainingStore>(
		(set) => ({
			trainings: [],
			userTrainings: [],

			addTraining: (data) =>
				set((state) => ({
					trainings: [
						...state.trainings,
						{
							id: self.crypto.randomUUID(),
							...data,
						},
					],
				})),
			updateTraining: (id, data) =>
				set((state) => ({
					trainings: state.trainings.map((item) =>
						item.id === id ? { ...item, ...data } : item
					),
				})),
			deleteTraining: (id) =>
				set((state) => ({
					trainings: state.trainings.filter((item) => item.id !== id),
				})),
			startTraining: (id) =>
				set((state) => {
					const training = state.trainings.find(
						(item) => item.id === id
					);
					if (!training) throw new Error('Тренировка не найдена');

					const testExercises = [
						{
							exerciseId: '1',
							goal: 10,
							reward: 10,
						},
						{
							exerciseId: '2',
							goal: 10,
							reward: 10,
						},
					];

					return {
						userTrainings: [
							...state.userTrainings,
							{
								id: self.crypto.randomUUID(),
								trainigId: training.id,
								exercises: testExercises,
								totalTime: 0,
								startDate: new Date(),
								endDate: null,
								rating: 0,
							},
						],
					};
				}),
			endTraining: (id, data) =>
				set((state) => {
					const training = state.userTrainings.find(
						(item) => item.id === id
					);
					if (!training) throw new Error('Тренировка не найдена');

					const startDate = training.startDate;
					const endDate = new Date();
					const totalTime = endDate.getTime() - startDate.getTime();

					const { account, updateAccount } =
						useAccountStore.getState();

					if (account) {
						const statistics = account.statistics;
						const updatedHistory = [
							...statistics.trainingsHistory,
							id,
						];
						updateAccount({
							statistics: {
								...statistics,
								trainingsHistory: updatedHistory,
								totalTrainingTime:
									statistics.totalTrainingTime + totalTime,
							},
						});
					}

					return {
						userTrainings: state.userTrainings.map((item) =>
							item.id === id
								? {
										...item,
										...data,
										endDate,
										totalTime,
									}
								: item
						),
					};
				}),
		}),
		{
			name: 'training-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
