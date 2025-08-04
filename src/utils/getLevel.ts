import { useUserInfoStore } from '../stores/UserInfoStore';

export const getLevelInfo = () => {
	let totalExp = useUserInfoStore.getState().stats.experiencePoints ?? 0;
	let exp = totalExp;
	let level = 1;
	let requiredExp = 4;

	while (exp >= requiredExp) {
		exp -= requiredExp;
		level++;
		requiredExp = Math.floor(requiredExp * 1.2);
	}

	return {
		level,
		remainingExp: exp,
		requiredExpForNextLevel: requiredExp,
		totalExp,
		progressToNextLevel: Math.min(1, exp / requiredExp),
	};
};
