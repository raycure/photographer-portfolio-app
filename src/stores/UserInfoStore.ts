import { create } from 'zustand';
import { UserState } from './StoreTypes';
import { createJSONStorage, persist } from 'zustand/middleware';

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
		tokenExpiry: undefined,
	},
};
export const useUserInfoStore = create(
	persist(
		(set) => ({
			...initialState,
		}),
		{
			name: 'storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
