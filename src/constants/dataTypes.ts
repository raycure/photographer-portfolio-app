import { UserID } from '../stores/StoreTypes';

type ChallengeDates = {
	start: string;
	end: string;
};
export type Entry = {
	entryId: string;
	userId: string;
	likes: UserID[];
	imageId: string;
	rank: [number, number]; // [newRank, oldRank]
};
export type ChallengeHistory = {
	challengeId: string;
	challengeDates: ChallengeDates;
	challengeTheme: string;
	challengeDescription: string;
	prizeInfo: string;
	photoRatio: string;
	entries: number;
	winners: Entry[];
};

export type Challenge = {
	challengeId: string;
	challengeDates: ChallengeDates;
	challengeTheme: string;
	challengeDescription: string;
	prizeInfo: string;
	photoRatio: string;
	entries: Entry[];
};
