import { create } from 'zustand';
import { UserActions, UserState } from './StoreTypes';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: UserState = {
	personalInfo: {
		id: undefined,
		name: undefined,
		username: undefined,
		email: undefined,
		verified: false,
		premium: false,
	},
	quotas: {
		leftAdQuota: 30,
		leftFreeImageQuota: 6,
	},
	social: {
		socialMedia: [],
		followingAccounts: [],
		followerAccounts: [],
	},
	preferences: {
		language: undefined,
	},
	stats: {
		experiencePoints: undefined,
		attendedChallenges: undefined,
		wins: undefined,
		favorites: [],
	},
	auth: {
		authToken: undefined,
		refreshToken: undefined,
	},
};
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
