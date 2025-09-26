import { useColors } from '@/src/hooks/useColors';
import { SettingsItemConfig } from './SettingsTypes';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import ReportIssueBlock from '../Modal/ReportIssueBlock';
import { useModalStore } from '@/src/stores/ModalStore';
import ChangePasswordBlock from '../Modal/ChangePasswordBlock';
import { useInteractionStore } from '@/src/stores/InteractionStore';

export const SettingsBlocksConfig: () => Record<
	string,
	SettingsItemConfig[]
> = () => {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const openModal = useModalStore((state) => state.openModal);
	const interactionStore = useInteractionStore();
	return {
		'Content & Preferences': [
			{
				title: 'Language',
				icon: { collectionKey: 'ion', name: 'language-outline' },
				rightContent: {
					button: true,
					title: userInfoStore.preferences.language,
				},
				onPress: () => interactionStore.setModalOpen('languages', true),
			},
			{
				title: 'Dark Theme',
				icon: { collectionKey: 'fe', name: 'sun' },
				rightContent: { button: false, switch: true, title: '' },
				onPress: () => userInfoStore.changeTheme(),
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
				onPress: () =>
					openModal({
						title: 'Change your password',
						extra: <ChangePasswordBlock />,
						buttons: {
							configuration: 'row',
							list: [
								{
									type: 'stretched',
									content: 'Cancel',
									onPress: () => useModalStore.getState().closeModal(),
								},
								{
									type: 'stretched',
									content: 'Change',
									onPress: () => useModalStore.getState().closeModal(),
								},
							],
						},
					}),
			},
			{
				title: 'Report an issue',
				icon: { collectionKey: 'fa6', name: 'exclamation' },
				onPress: () =>
					openModal({
						title: 'Having a problem?',
						content:
							'Tell us your issue and you will be contacted by our team via email.',
						extra: <ReportIssueBlock />,
						buttons: {
							configuration: 'row',
							list: [
								{
									type: 'stretched',
									content: 'Cancel',
									onPress: () => useModalStore.getState().closeModal(),
								},
								{
									type: 'stretched',
									content: 'Send',
									onPress: () => useModalStore.getState().closeModal(),
								},
							],
						},
					}),
			},
			{
				title: 'Logout from your account',
				icon: {
					collectionKey: 'ion',
					name: 'log-out-outline',
					size: 26,
					style: { left: 2 },
				},
				onPress: () => userInfoStore.logout(),
			},
			{
				title: 'Delete account',
				icon: { collectionKey: 'oct', name: 'trash', color: colors.accentRed },
				onPress: () => console.log(userInfoStore.personalInfo.id),
				titleColor: colors.accentRed,
				tintColor: colors.iconBackgroundRed,
			},
		],
	};
};
