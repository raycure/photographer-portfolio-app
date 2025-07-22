import { IconCollectionKey } from '@/src/constants/iconRegistry';
import { TextInputProps } from 'react-native';

type InputItem = {
	leftIcon: {
		collectionKey: IconCollectionKey;
		name: string;
	};
	placeholder: string;
	name: 'name' | 'username' | 'password' | 'email';
	title: string;
	textContentType?: TextInputProps['textContentType'];
};

export type InputDataTypes = {
	[key: string]: InputItem;
};
