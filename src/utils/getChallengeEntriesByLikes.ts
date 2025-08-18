type Entry = {
	entryId: string;
	userId: string;
	username: string;
	name: string;
	likes: number;
	imageId: string;
};

type ChallengeEntriesResult = {
	topThree: Entry[];
	others: Entry[];
	allEntries: Entry[];
};

export function getChallengeEntriesByLikes(
	entries: Entry[]
): ChallengeEntriesResult {
	const sorted = [...entries].sort((a, b) => b.likes - a.likes);

	return {
		topThree: sorted.slice(0, 3),
		others: sorted.slice(3),
		allEntries: sorted,
	};
}
