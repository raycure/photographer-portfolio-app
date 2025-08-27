import { UserState } from '../stores/StoreTypes';

export const dummyUsers: UserState[] = [
	{
		personalInfo: {
			id: 'user_001',
			name: 'Alice Johnson',
			username: 'naturelover',
			email: 'alice.johnson@example.com',
			imageId: 'image_943',
			verified: true,
			premium: false,
		},
		quotas: {
			leftAdQuota: 5,
			leftFreeImageQuota: 2,
		},
		social: {
			socialMedia: [
				{ type: 'instagram', url: 'https://instagram.com/naturelover' },
				{ type: 'twitter', url: 'https://twitter.com/naturelover' },
			],
			followingAccounts: ['user_002', 'user_003'],
			followerAccounts: ['user_005', 'user_006'],
		},
		preferences: {
			language: 'en',
			darkTheme: true,
		},
		stats: {
			experiencePoints: 150,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'token_001',
			refreshToken: 'refresh_001',
		},
	},
	{
		personalInfo: {
			id: 'user_002',
			name: 'Bob Smith',
			username: 'cityexplorer',
			email: 'bob.smith@example.com',
			imageId: 'image_943',
			verified: false,
			premium: true,
		},
		quotas: {
			leftAdQuota: 12,
			leftFreeImageQuota: 8,
		},
		social: {
			socialMedia: [
				{ type: 'facebook', url: 'https://facebook.com/cityexplorer' },
			],
			followingAccounts: ['user_001', 'user_004'],
			followerAccounts: ['user_007'],
		},
		preferences: {
			language: 'tr',
			darkTheme: false,
		},
		stats: {
			experiencePoints: 230,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'token_002',
			refreshToken: 'refresh_002',
		},
	},
	{
		personalInfo: {
			id: 'user_003',
			name: 'Clara Lee',
			username: 'foodiequeen',
			email: 'clara.lee@example.com',
			imageId: 'image_943',
			verified: true,
			premium: true,
		},
		quotas: {
			leftAdQuota: 0,
			leftFreeImageQuota: 15,
		},
		social: {
			socialMedia: [
				{ type: 'instagram', url: 'https://instagram.com/foodiequeen' },
			],
			followingAccounts: ['user_005', 'user_006'],
			followerAccounts: ['user_001', 'user_004'],
		},
		preferences: {
			language: 'en',
			darkTheme: false,
		},
		stats: {
			experiencePoints: 480,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'token_003',
			refreshToken: 'refresh_003',
		},
	},
	{
		personalInfo: {
			id: 'user_004',
			name: 'David Kim',
			username: 'techguru',
			email: 'david.kim@example.com',
			imageId: 'image_265',
			verified: true,
			premium: false,
		},
		quotas: {
			leftAdQuota: 7,
			leftFreeImageQuota: 3,
		},
		social: {
			socialMedia: [
				{ type: 'linkedin', url: 'https://linkedin.com/in/techguru' },
				{ type: 'twitter', url: 'https://twitter.com/techguru' },
			],
			followingAccounts: ['user_003'],
			followerAccounts: ['user_002', 'user_003'],
		},
		preferences: {
			language: 'ko',
			darkTheme: true,
		},
		stats: {
			experiencePoints: 90,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'token_004',
			refreshToken: 'refresh_004',
		},
	},
	{
		personalInfo: {
			id: 'user_005',
			name: 'Emily Brown',
			username: 'wildadventure',
			email: 'emily.brown@example.com',
			imageId: 'image_265',
			verified: false,
			premium: false,
		},
		quotas: {
			leftAdQuota: 15,
			leftFreeImageQuota: 7,
		},
		social: {
			socialMedia: [
				{ type: 'instagram', url: 'https://instagram.com/wildadventure' },
			],
			followingAccounts: ['user_006'],
			followerAccounts: ['user_001'],
		},
		preferences: {
			language: 'fr',
			darkTheme: true,
		},
		stats: {
			experiencePoints: 310,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'token_005',
			refreshToken: 'refresh_005',
		},
	},
	{
		personalInfo: {
			id: 'user_006',
			name: 'Jane Doe',
			username: 'jane_doe32',
			email: 'jane.doe@example.com',
			imageId: 'image_943',
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
			followingAccounts: ['user_002', 'user_003', 'user_004'],
			followerAccounts: ['user_001', 'user_003', 'user_004', 'user_005'],
		},
		preferences: {
			language: 'en',
			darkTheme: true,
		},
		stats: {
			experiencePoints: 32,
			attendedChallenges: [
				{
					challengeId: 'challenge_23',
					imageId: 'image_333',
					rank: 3,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_12',
					imageId: 'image_365',
					rank: 4,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_21',
					imageId: 'image_386',
					rank: 76,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_54',
					imageId: 'image_943',
					rank: 2,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_25',
					imageId: 'image_233',
					rank: 64,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_73',
					imageId: 'image_265',
					rank: 24,
					likes: 263,
					saved: false,
				},
				{
					challengeId: 'challenge_28',
					imageId: 'image_286',
					rank: 9,
					likes: 263,
					saved: true,
				},
				{
					challengeId: 'challenge_56',
					imageId: 'image_243',
					rank: 12,
					likes: 263,
					saved: true,
				},
			],
			favorites: [
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
			],
		},
		auth: {
			authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
			refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8',
		},
	},
];
