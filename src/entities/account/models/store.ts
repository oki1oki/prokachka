import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { idbStorage } from '@/shared/utils/idb-storage';
import { Account } from './models';

interface AccountStore {
	account: Account | null;
	addAccount: (account: Account) => void;
	updateAccount: (data: Partial<Account>) => void;
}

export const useAccountStore = create<AccountStore>()(
	persist(
		(set) => ({
			account: null,
			addAccount: (account) => set({ account }),
			updateAccount: (data) =>
				set((state) => ({
					account: { ...state.account!, ...data },
				})),
		}),
		{
			name: 'account-storage',
			storage: createJSONStorage(() => idbStorage),
		}
	)
);
