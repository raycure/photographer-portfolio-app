import { CustomIconProps } from '../UI/UITypes';

export const FloatingActionsConfig: {
	[key: string]: {
		key: string;
		icon: CustomIconProps;
		onPress: () => void;
	}[];
} = {
	personal: [
		{
			key: 'bookmark',
			icon: { collectionKey: 'fa', name: 'bookmark-o', size: 28 },
			onPress: () => console.log('test'),
		},
		{
			key: 'edit',
			icon: {
				collectionKey: 'oct',
				name: 'pencil',
				size: 26,
			},
			onPress: () => console.log('test'),
		},
	],
	other: [
		{
			key: 'block',
			icon: {
				collectionKey: 'fa6',
				name: 'exclamation',
				size: 26,
			},
			onPress: () => console.log('test'),
		},
		{
			key: 'follow',
			icon: {
				collectionKey: 'fe',
				name: 'user-plus',
				size: 26,
				style: { right: -2 },
			},
			onPress: () => console.log('test'),
		},
	],
	general: [
		{
			key: 'share',
			icon: {
				collectionKey: 'ion',
				name: 'share-social-outline',
				style: { left: -2 },
			},
			onPress: () => console.log('test'),
		},
		{
			key: 'link',
			icon: { collectionKey: 'oct', name: 'link', size: 26 },
			onPress: () => console.log('test'),
		},
	],
};
