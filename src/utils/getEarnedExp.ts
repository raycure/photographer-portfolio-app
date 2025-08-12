export default function getEarnedExp(rank: number) {
	let earnedExp = 0;
	if (rank <= 3) {
		earnedExp = 18;
	} else if (rank > 3 && rank <= 10) {
		earnedExp = 10;
	} else if (rank > 10 && rank <= 25) {
		earnedExp = 6;
	} else if (rank > 25 && rank <= 50) {
		earnedExp = 4;
	} else {
		earnedExp = 2;
	}
	return earnedExp;
}
