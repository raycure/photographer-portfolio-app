import { create } from 'zustand';
const initialState = {
	name: undefined,
	username: undefined,
	email: undefined,
	verified: false,
	premium: false,
	leftAdQuota: 30,
	leftFreeImageQuota: 6,
	socialMedia: [],
	followingAccounts: [],
	followerAccounts: [],
	preferences: { language: undefined },
	experiencePoints: undefined, // I don't know if there'll be a leveling system for sure
	attendedChallenges: undefined,
	wins: undefined,
	favorites: [], // I don't know if there'll be a favorites ystem either
};
export const useUserInfoStore = create((set) => ({
	...initialState,
}));
