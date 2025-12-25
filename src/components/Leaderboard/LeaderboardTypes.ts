import { EntryID } from '@/src/stores/StoreTypes';
import { ViewStyle } from 'react-native';
import { GenericSizes } from '../UI/UITypes';

export type LeaderBoardListItemProps = {
	entryId: EntryID;
	topNine?: boolean;
	ratio: [number, number];
};
export type RankIndicatorProps = {
	rank: [number, number] | number;
	style?: ViewStyle;
};
export type LeaderboardLikeButtonProps = {
	entryId: EntryID;
	size?: GenericSizes;
};
