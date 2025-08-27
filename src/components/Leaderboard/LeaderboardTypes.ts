import { ArrowDirection } from '@/src/utils/getArrowDirection';
import { ReactNode } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { PhotoSize } from '../UI/UITypes';

export type LeaderboardToggleProps = {
	levelToggle: boolean;
	setLevelToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LeaderboardWinerConfig = {
	style: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
	rank: number;
	photoSize: PhotoSize;
	icon?: ReactNode;
};
export type RankIndicatorProps = {
	arrowDirection?: ArrowDirection;
	row?: boolean;
	rank: number;
	tint?: ColorValue;
};

type Entry = {
	entryId: string;
	userId: string;
	username: string;
	name: string;
	likes: number;
	rank: [number, number]; // [newRank, oldRank]
};
export type LeaderboardListItemProps = { entry: Entry };

export type LeaderboardPersonalButtonWrapper = { children: React.ReactNode };
