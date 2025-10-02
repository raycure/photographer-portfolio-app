export const getLevelInfo = (totalExp: number) => {
	let exp = totalExp;
	let level = 1;
	let baseRequirement = 4;
	let increment = 3;

	while (true) {
		let requiredExp = baseRequirement + (level - 1) * increment;
		if (exp < requiredExp) break;

		exp -= requiredExp;
		level++;
	}

	let requiredExpForNextLevel = baseRequirement + (level - 1) * increment;

	return {
		level,
		remainingExp: exp,
		requiredExpForNextLevel,
		totalExp,
		progressToNextLevel: exp / requiredExpForNextLevel,
	};
};
