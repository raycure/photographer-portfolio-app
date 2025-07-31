import { ActionButtonConfig } from './ProfileTypes';
import Colors from '@/src/constants/Colors';
export const actionButtonConfigs: { [key: string]: ActionButtonConfig[] } = {
	personal: [
		{
			key: 'bookmark',
			collectionKey: 'fa',
			name: 'bookmark',
		},
		{
			key: 'edit',
			collectionKey: 'fa',
			name: 'edit',
		},
	],
	other: [
		{
			key: 'follow',
			collectionKey: 'fe',
			name: 'user-plus', //user-check
		},
		{
			key: 'block',
			collectionKey: 'fa6',
			name: 'ban',
			backgroundColor: Colors.dark.accentRed,
		},
	],
	general: [
		{
			key: 'share',
			collectionKey: 'oct',
			name: 'share-android',
		},
		{
			key: 'link',
			collectionKey: 'oct',
			name: 'link',
		},
	],
};
