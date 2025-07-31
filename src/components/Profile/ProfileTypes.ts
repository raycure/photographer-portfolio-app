import { ViewStyle } from 'react-native';
import { CustomIconProps } from '../UI/UITypes';

export type ActionButtonConfig = {
	key: string;
	style?: ViewStyle;
	collectionKey: CustomIconProps['collectionKey'];
	name: string;
	size?: number;
	backgroundColor?: string;
};
