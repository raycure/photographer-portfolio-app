import { useColors } from '@/src/hooks/useColors';
import { SettingsItemConfig } from './SettingsTypes';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import ReportIssueBlock from '../Modal/ReportIssueBlock';
import { useModalStore } from '@/src/stores/ModalStore';
import ChangePasswordBlock from '../Modal/ChangePasswordBlock';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { languages } from '@/src/constants/languages';
import { useTranslation } from 'react-i18next';
import { useNotificationStore } from '@/src/stores/NotificationStore';
import { ChangePassword, ReportIssue } from '../Modal/modals';

export const SettingsBlocksConfig: () => Record<
	string,
	SettingsItemConfig[]
> = () => {
	const colors = useColors();
	const { t } = useTranslation();
	const userInfoStore = useUserInfoStore();
	const modalStore = useModalStore();
	const notificationStore = useNotificationStore();
	const openModal = useModalStore((state) => state.openModal);
	const interactionStore = useInteractionStore();
	return {
		[t('Settings.Preferences.title')]: [
			{
				title: t('Settings.Preferences.subtitleOne'),
				icon: { collectionKey: 'ion', name: 'language-outline' },
				rightContent: {
					button: true,
					title: languages.find(
						(item) => userInfoStore.preferences.language === item.language
					)?.title,
				},
				onPress: () => interactionStore.setModalOpen('languages', true),
			},
			{
				title: t('Settings.Preferences.subtitleTwo'),
				icon: { collectionKey: 'fa', name: 'moon-o', size: 28 },
				rightContent: { button: false, switch: true, title: '' },
				onPress: () => userInfoStore.changeTheme(),
			},
		],
		[t('Settings.Settings.title')]: [
			{
				title: t('Settings.Settings.subtitleOne'),
				icon: {
					collectionKey: 'fa6',
					name: 'crown',
					color: colors.accentOrange,
				},
				onPress: () => console.log('test'),
				tintColor: colors.iconBackgroundYellow,
			},
			{
				title: t('Settings.Settings.subtitleTwo'),
				icon: { collectionKey: 'ion', name: 'key' },
				onPress: () => ChangePassword(),
			},
			{
				title: t('Settings.Settings.subtitleThree'),
				icon: { collectionKey: 'fa6', name: 'exclamation' },
				onPress: () => ReportIssue(),
			},
			{
				title: t('Settings.Settings.subtitleFour'),
				icon: {
					collectionKey: 'ion',
					name: 'log-out-outline',
					size: 26,
					style: { left: 2 },
				},
				onPress: () => userInfoStore.logout(),
			},
			{
				title: t('Settings.Settings.subtitleFive'),
				icon: { collectionKey: 'oct', name: 'trash', color: colors.accentRed },
				onPress: () => {
					userInfoStore.resetUserData();
					interactionStore.resetStore();
					modalStore.resetModalStore();
					notificationStore.resetStore();
				},
				titleColor: colors.accentRed,
				tintColor: colors.iconBackgroundRed,
			},
		],
	};
};
