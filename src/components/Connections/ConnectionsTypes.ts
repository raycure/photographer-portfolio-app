import { selectionBarConfig } from './ConnectionsConfig';

export type SelectionKey = 'followers' | 'following' | 'friends';

export type SelectionBarConfig = {
	[K in SelectionKey]: {
		title: string;
	};
};
export type ConnectionsBarProps = {
	selection: SelectionKey;
	setSelection: React.Dispatch<React.SetStateAction<SelectionKey>>;
};
