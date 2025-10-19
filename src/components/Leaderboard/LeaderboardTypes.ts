import { EntryID } from '@/src/stores/StoreTypes';
import { GenericSizes } from '../UI/UITypes';

export type LeaderBoardListItemProps = { entryId: EntryID };
export type RankIndicatorProps = {
	rank: [number, number];
	size?: GenericSizes;
};
