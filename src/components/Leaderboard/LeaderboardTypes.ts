import { ArrowDirection } from '@/src/utils/getArrowDirection';
import { ReactNode } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { PhotoSize } from '../UI/UITypes';
import { Entry } from '@/src/constants/dataTypes';

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

export type LeaderboardListItemProps = { entry: Entry };

export type LeaderboardPersonalButtonWrapper = { children: React.ReactNode };
