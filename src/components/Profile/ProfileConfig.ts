import { useColors } from '@/src/hooks/useColors';
import { ActionButtonConfig } from './ProfileTypes';
export const useActionButtonConfigs = (): {
	[key: string]: ActionButtonConfig[];
} => {
	const colors = useColors();

	return {
		personal: [
			{
				key: 'bookmark',
				collectionKey: 'fa',
				name: 'bookmark-o',
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
				name: 'user-plus',
			},
			{
				key: 'block',
				collectionKey: 'fa6',
				name: 'ban',
				backgroundColor: colors.accentRed,
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
};
