import { ChallengeHistory, Entry } from '@/src/constants/dataTypes';

export type ChallengeHistoryBlockHeaderProps = {
	theme: string;
	date: { start: string; end: string };
	entries: number;
};
export type ChallengeHistoryBlockItemProps = { entry: Entry };

export type ChallengeHistoryBlockProps = {
	data: ChallengeHistory;
};
