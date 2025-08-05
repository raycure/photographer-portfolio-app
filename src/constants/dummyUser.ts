export const dummyUser = {
	personalInfo: {
		id: 'user_12345',
		name: 'Jane Doe',
		username: 'jane_doe32',
		email: 'jane.doe@example.com',
		verified: true,
		premium: true,
	},
	quotas: {
		leftAdQuota: 12,
		leftFreeImageQuota: 2,
	},
	social: {
		socialMedia: [
			{ type: 'instagram', url: 'https://instagram.com/janedoe' },
			{ type: 'twitter', url: 'https://twitter.com/janedoe' },
		],
		followingAccounts: ['user_54321', 'user_67890'],
		followerAccounts: ['user_11111', 'user_22222', 'user_33333'],
	},
	preferences: {
		language: 'en',
	},
	stats: {
		experiencePoints: 53,
		attendedChallenges: [
			{
				challengeId: 'challenge_23',
				imageId: 'image_333',
				rank: 3,
				likes: 263,
			},
			{
				challengeId: 'challenge_12',
				imageId: 'image_365',
				rank: 4,
				likes: 263,
			},
			{
				challengeId: 'challenge_21',
				imageId: 'image_386',
				rank: 76,
				likes: 263,
			},
			{
				challengeId: 'challenge_54',
				imageId: 'image_943',
				rank: 2,
				likes: 263,
			},
			{
				challengeId: 'challenge_25',
				imageId: 'image_233',
				rank: 64,
				likes: 263,
			},
			{
				challengeId: 'challenge_73',
				imageId: 'image_265',
				rank: 24,
				likes: 263,
			},
			{
				challengeId: 'challenge_28',
				imageId: 'image_286',
				rank: 9,
				likes: 263,
			},
			{
				challengeId: 'challenge_56',
				imageId: 'image_243',
				rank: 12,
				likes: 263,
			},
		],
		wins: [
			{
				challengeId: 'challenge_54',
				imageId: 'image_943',
				rank: 2,
				likes: 263,
				saved: true,
			},
			{
				challengeId: 'challenge_23',
				imageId: 'image_333',
				rank: 3,
				likes: 263,
				saved: false,
			},
		],
		favorites: [
			{
				challengeId: 'challenge_73',
				imageId: 'image_265',
				rank: 24,
				likes: 263,
			},
			{
				challengeId: 'challenge_28',
				imageId: 'image_286',
				rank: 9,
				likes: 263,
			},
			{
				challengeId: 'challenge_56',
				imageId: 'image_243',
				rank: 12,
				likes: 263,
			},
		],
	},
	auth: {
		authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
		refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8',
	},
};
