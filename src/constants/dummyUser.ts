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
		attendedChallenges: ['', '', '', '', '', '', '', '', '', '', '', ''],
		wins: ['', '', ''],
		favorites: ['challenge_101', 'challenge_205', 'challenge_333'],
	},
	auth: {
		authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
		refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8...',
	},
};
