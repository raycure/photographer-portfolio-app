import { useColors } from '@/src/hooks/useColors';
import { SettingsItemConfig } from './SettingsTypes';

export const SettingsBlocksConfig: () => Record<
	string,
	SettingsItemConfig[]
> = () => {
	const colors = useColors();
	return {
		'Content & Preferences': [
			{
				title: 'Favorites',
				icon: { collectionKey: 'ad', name: 'plus' },
				rightContent: { button: true, title: '' },
				onPress: () => console.log('test'),
			},
			{
				title: 'Language',
				icon: { collectionKey: 'ion', name: 'language-outline' },
				rightContent: { button: true, title: '' },
				onPress: () => console.log('test'),
			},
			{
				title: 'Theme',
				icon: { collectionKey: 'fe', name: 'sun' },
				rightContent: { button: true, title: '' },
				onPress: () => console.log('test'),
			},
		],
		Settings: [
			{
				title: 'Get premium ✨',
				icon: {
					collectionKey: 'fa6',
					name: 'crown',
					color: colors.accentOrange,
				},
				onPress: () => console.log('test'),
				tintColor: colors.iconBackgroundYellow,
			},
			{
				title: 'Change password',
				icon: { collectionKey: 'ion', name: 'key' },
				onPress: () => console.log('test'),
			},
			{
				title: 'Report an issue',
				icon: { collectionKey: 'fa6', name: 'exclamation' },
				onPress: () => console.log('test'),
			},
			{
				title: 'Delete account',
				icon: { collectionKey: 'oct', name: 'trash', color: colors.accentRed },
				onPress: () => console.log('test'),
				titleColor: colors.accentRed,
				tintColor: colors.iconBackgroundRed,
			},
		],
	};
};
