type ChallengeDates = {
	start: string;
	end: string;
};

type Entry = {
	entryId: string;
	userId: string;
	username: string;
	name: string;
	likes: number;
	rank: [number, number]; // [newRank, oldRank]
};

type Challenge = {
	challengeId: string;
	challengeDates: ChallengeDates;
	challengeTheme: string;
	challengeDescription: string;
	prizeInfo: string;
	photoRatio: string;
	entries: Entry[];
};
export const dummyChallengeData: Challenge = {
	challengeId: 'challenge_001',
	challengeDates: { start: '2025-08-01', end: '2025-08-31' },
	challengeTheme: 'Nature Photography',
	challengeDescription:
		'Capture the beauty of nature in its purest form. Whether it’s a serene forest, a blooming flower, or a breathtaking sunset, show us your most inspiring nature shot.',
	prizeInfo: '',
	photoRatio: '5:4',
	entries: [
		{
			entryId: 'entry_005',
			userId: 'user_005',
			username: 'wildadventure',
			name: 'Emily Brown',
			likes: 130,
			rank: [1, 5], // [newRank, oldRank]
		},
		{
			entryId: 'entry_006',
			userId: 'user_006',
			username: 'oceanspirit',
			name: 'Daniel Wilson',
			likes: 110,
			rank: [2, 6],
		},
		{
			entryId: 'entry_013',
			userId: 'user_013',
			username: 'wildflowers',
			name: 'Mia Lewis',
			likes: 112,
			rank: [3, 13],
		},
		{
			entryId: 'entry_004',
			userId: 'user_004',
			username: 'urbanlens',
			name: 'James Anderson',
			likes: 102,
			rank: [4, 4],
		},
		{
			entryId: 'entry_014',
			userId: 'user_014',
			username: 'skylinechaser',
			name: 'Benjamin Hall',
			likes: 98,
			rank: [5, 14],
		},
		{
			entryId: 'entry_002',
			userId: 'user_002',
			username: 'sunsetseeker',
			name: 'Mark Lee',
			likes: 95,
			rank: [6, 2],
		},
		{
			entryId: 'entry_012',
			userId: 'user_012',
			username: 'coastlineviews',
			name: 'Lucas White',
			likes: 90,
			rank: [7, 12],
		},
		{
			entryId: 'entry_008',
			userId: 'user_008',
			username: 'mountainhiker',
			name: 'William Martinez',
			likes: 89,
			rank: [8, 8],
		},
		{
			entryId: 'entry_003',
			userId: 'user_003',
			username: 'forestfan',
			name: 'Sophia Smith',
			likes: 87,
			rank: [9, 3],
		},
		{
			entryId: 'entry_015',
			userId: 'user_015',
			username: 'countryside',
			name: 'Amelia Allen',
			likes: 85,
			rank: [10, 15],
		},
		{
			entryId: 'entry_007',
			userId: 'user_007',
			username: 'travelbug',
			name: 'Olivia Taylor',
			likes: 77,
			rank: [11, 7],
		},
		{
			entryId: 'entry_010',
			userId: 'user_010',
			username: 'desertcolors',
			name: 'Michael Thomas',
			likes: 73,
			rank: [12, 10],
		},
		{
			entryId: 'entry_016',
			userId: 'user_016',
			username: 'pathfinder',
			name: 'Ethan Young',
			likes: 70,
			rank: [13, 16],
		},
		{
			entryId: 'entry_011',
			userId: 'user_011',
			username: 'flowerchild',
			name: 'Isabella Rodriguez',
			likes: 64,
			rank: [14, 11],
		},
		{
			entryId: 'entry_009',
			userId: 'user_009',
			username: 'riverdreams',
			name: 'Ava Garcia',
			likes: 54,
			rank: [15, 9],
		},
		{
			entryId: 'entry_001',
			userId: 'user_001',
			username: 'naturelover',
			name: 'Alice Johnson',
			likes: 13,
			rank: [16, 1],
		},
	],
};
export const dummyChallengeImages = {
	entry_005: 'image_233',
	entry_006: 'image_265',
	entry_013: 'image_233',
	entry_004: 'image_943',
	entry_014: 'image_265',
	entry_002: 'image_365',
	entry_012: 'image_943',
	entry_008: 'image_243',
	entry_003: 'image_386',
	entry_015: 'image_286',
	entry_007: 'image_286',
	entry_010: 'image_365',
	entry_016: 'image_243',
	entry_011: 'image_386',
	entry_009: 'image_333',
	entry_001: 'image_333',
};
