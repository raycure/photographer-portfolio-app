import { UserState } from './StoreTypes';

export const UserStoreInitialState: UserState = {
	personalInfo: {
		id: undefined,
		name: undefined,
		username: undefined,
		email: undefined,
		imageId: undefined,
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
		language: 'english',
		darkTheme: true,
	},
	stats: {
		experiencePoints: 0,
		attendedChallenges: [],
		favorites: [],
	},
	auth: {
		authToken: undefined,
		refreshToken: undefined,
	},
};
