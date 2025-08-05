import { UserState } from './StoreTypes';

export const UserStoreInitialState: UserState = {
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
		leftFreeImageQuota: 4,
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
		attendedChallenges: [],
		wins: [],
		favorites: [],
	},
	auth: {
		authToken: undefined,
		refreshToken: undefined,
	},
};
