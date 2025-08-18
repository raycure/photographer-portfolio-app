import { ReactNode } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';

export type LeaderboardToggleProps = {
	levelToggle: boolean;
	setLevelToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

type PhotoSize = 'small' | 'medium' | 'big' | undefined;

export type LeaderboardWinerConfig = {
	style: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
	rank: number;
	photoSize: PhotoSize;
	icon?: ReactNode;
};
export type RankIndicatorProps = {
	directionUp?: boolean;
	row?: boolean;
	rank: number;
	tint?: ColorValue;
};

export type LeaderboardPhotoProps = { size?: PhotoSize; source?: string };
