export function daysFromToday(dateStr: string): number {
	const today = new Date();
	const targetDate = new Date(dateStr);

	today.setHours(0, 0, 0, 0);
	targetDate.setHours(0, 0, 0, 0);

	const msPerDay = 1000 * 60 * 60 * 24;
	const diff = Math.abs(targetDate.getTime() - today.getTime()) / msPerDay;

	return Math.round(diff);
}
