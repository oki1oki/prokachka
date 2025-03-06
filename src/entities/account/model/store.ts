import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { idbStorage } from '@/shared/utils/idb-storage';
import { Account } from './models';

interface AccountStore {
	account: Account | null;
	addAccount: (account: Account) => void;
	updateAccount: (data: Partial<Account>) => void;
	toggleFavoriteExercise: (exerciseId: string) => void;
	buyShopItem: (shopItemId: string) => void;
}

export const useAccountStore = create(
	persist<AccountStore>(
		(set) => ({
			account: null,
			addAccount: (account) => set({ account }),
			updateAccount: (data) =>
				set((state) => {
					if (!state.account) throw new Error('Аккаунт не найден');

					return {
						account: {
							...state.account,
							...data,
						},
					};
				}),
			toggleFavoriteExercise: (exerciseId) => {
				set((state) => {
					if (!state.account) throw new Error('Аккаунт не найден');

					const { profile } = state.account;
					const favoriteExercises = profile.favExIds;
					const isFavorite = favoriteExercises.includes(exerciseId);
					const newFavorites = isFavorite
						? favoriteExercises.filter((id) => id !== exerciseId)
						: [...favoriteExercises, exerciseId];

					return {
						account: {
							...state.account,
							profile: {
								...profile,
								favExIds: newFavorites,
							},
						},
					};
				});
			},
			buyShopItem: (id) =>
				set((state) => {
					if (!state.account) throw new Error('Аккаунт не найден');

					const isOwned =
						state.account.profile.ownedItemsIds.includes(id);

					if (isOwned)
						return {
							account: state.account,
						};

					return {
						account: {
							...state.account,
							profile: {
								...state.account.profile,
								ownedItemsIds: [
									...state.account.profile.ownedItemsIds,
									id,
								],
							},
						},
					};
				}),
		}),
		{
			name: 'account-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
