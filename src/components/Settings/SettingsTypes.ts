import { ColorValue } from 'react-native';
import { CustomIconProps } from '../UI/UITypes';

export type SettingsItemConfig = {
	title: string;
	icon: CustomIconProps;
	onPress: () => void;
	rightContent?: {
		button: boolean;
		title?: string;
	};
	titleColor?: string;
	tintColor?: string;
};

export type SettingsItemProps = {
	icon: CustomIconProps;
	tintColor?: ColorValue;
	title: string;
	rightContent?: { button?: boolean; title?: string };
	titleColor?: ColorValue;
	onPress: (...args: any[]) => any | (() => void) | null | undefined;
};
