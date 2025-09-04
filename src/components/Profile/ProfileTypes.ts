import { ViewStyle } from 'react-native';
import { RegistredIconProps } from '../UI/UITypes';

export type ActionButtonConfig = {
	key: string;
	style?: ViewStyle;
	collectionKey: RegistredIconProps['collectionKey'];
	name: string;
	size?: number;
	backgroundColor?: string;
};
