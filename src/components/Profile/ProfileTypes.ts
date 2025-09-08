import { ViewStyle } from 'react-native';
import {
	CustomIconProps,
	GenericSizes,
	RegistredIconProps,
} from '../UI/UITypes';

export type ActionButtonConfig = {
	key: string;
	style?: ViewStyle;
	collectionKey: RegistredIconProps['collectionKey'];
	name: string;
	size?: number;
	backgroundColor?: string;
};

export type FloatingButtonProps = {
	onPress?: () => void;
	size?: GenericSizes;
	icon: CustomIconProps;
	style?: ViewStyle;
};
