import { create } from 'zustand';
import { UserActions, UserState } from './StoreTypes';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserStoreInitialState } from './InitialStates';
import { dummyUser } from '../constants/dummyUser';
const initialState = UserStoreInitialState;
export const useUserInfoStore = create<UserActions & UserState>()(
	persist(
		(set) => ({
			//...initialState,
			...dummyUser,
			//setUserData: (data) => set(() => ({ ...data })),
			setUserData: () => set(() => ({ ...dummyUser })),
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
			addFavorite: (challenge) =>
				set((state) => ({
					stats: {
						...state.stats,
						favorites: [...state.stats.favorites, challenge],
					},
				})),

			removeFavorite: (challengeId) =>
				set((state) => ({
					stats: {
						...state.stats,
						favorites: state.stats.favorites.filter(
							(fav) => fav.challengeId !== challengeId
						),
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
			followUser: (id) =>
				set((state) => ({
					social: {
						...state.social,
						followingAccounts: [...state.social.followingAccounts, id],
					},
				})),
			unfollowUser: (id) =>
				set((state) => ({
					social: {
						...state.social,
						followingAccounts: state.social.followingAccounts.filter(
							(followedId) => followedId !== id
						),
					},
				})),
			changeTheme: () =>
				set((state) => ({
					preferences: {
						...state.preferences,
						darkTheme: !state.preferences.darkTheme,
					},
				})),
			addSocialAccount: (account) =>
				set((state) => ({
					social: {
						...state.social,
						socialMedia: [...state.social.socialMedia, account],
					},
				})),
			deleteSocialAccount: (account) =>
				set((state) => ({
					social: {
						...state.social,
						socialMedia: state.social.socialMedia.filter(
							(oldSocial) => oldSocial.social !== account.social
						),
					},
				})),
		}),
		{
			name: 'storage',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
