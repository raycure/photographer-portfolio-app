import { create } from 'zustand';
import { UserActions, UserState } from './StoreTypes';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserStoreInitialState } from './InitialStates';
const initialState = UserStoreInitialState;
export const useUserInfoStore = create<UserActions & UserState>()(
	persist(
		(set) => ({
			...initialState,
			setUserData: (data) => set(() => ({ ...data })),
			updateUserData: (data) =>
				set((state) => ({
					...state,
					...data,
				})),
			resetUserData: () => set(() => initialState),
			setPersonalInfo: (info) =>
				set((state) => ({
					personalInfo: {
						...state.personalInfo,
						...info,
					},
				})),
			setTokens: ({ authToken, refreshToken }) =>
				set((state) => ({
					auth: {
						...state.auth,
						authToken,
						refreshToken,
					},
				})),
			logout: () => set(() => initialState),
			addFavorite: (id) =>
				set((state) => ({
					stats: {
						...state.stats,
						favorites: [...state.stats.favorites, id],
					},
				})),
			removeFavorite: (id) =>
				set((state) => ({
					stats: {
						...state.stats,
						favorites: state.stats.favorites.filter((f) => f !== id),
					},
				})),
			decreaseQuota: (type) =>
				set((state) => {
					const currentValue = state.quotas[type] ?? 0;
					const newValue = currentValue > 0 ? currentValue - 1 : 0;
					return {
						quotas: {
							...state.quotas,
							[type]: newValue,
						},
					};
				}),
		}),
		{
			name: 'storage',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
