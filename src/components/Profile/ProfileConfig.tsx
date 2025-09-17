import { useModalStore } from '@/src/stores/ModalStore';
import { CustomIconProps } from '../UI/UITypes';
import LinkedAccountsBlock from '../Modal/LinkedAccountsBlock';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import UserContext from '@/src/context/UserContext';
import { useContext } from 'react';
import { useRouter } from 'expo-router';
import ReportAccount from '../Modal/ReportAccount';
type FloatingAction = {
	key: string;
	icon: CustomIconProps;
	onPress: () => void;
};
export const FloatingActionsConfig: () => Record<
	string,
	FloatingAction[]
> = () => {
	const openModal = useModalStore((state) => state.openModal);
	const userInfoStore = useUserInfoStore();
	const data = useContext(UserContext);
	const router = useRouter();
	const isPersonal = data.personalInfo.id === userInfoStore.personalInfo.id;
	return {
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
				onPress: () => router.push('/(stack)/editAccount'),
			},
		],
		other: [
			{
				key: 'follow',
				icon: {
					collectionKey: 'fe',
					name: 'user-plus',
					size: 26,
					style: { right: -2 },
				},
				onPress: () => userInfoStore.followUser(data.personalInfo.id!),
			},
			{
				key: 'report',
				icon: {
					collectionKey: 'fa6',
					name: 'exclamation',
					size: 26,
				},
				onPress: () =>
					openModal({
						title: 'Report Account',
						extra: <ReportAccount userId={data.personalInfo.id ?? ''} />,
					}),
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
				onPress: () => console.log(data.personalInfo.id),
			},
			...(isPersonal || data.social.socialMedia.length > 0
				? [
						{
							key: 'link',
							icon: {
								collectionKey: 'oct',
								name: 'link',
								size: 26,
							} as CustomIconProps,
							onPress: () =>
								isPersonal
									? router.push('/(stack)/linkedAccounts')
									: openModal({
											title: 'Associated Accounts',
											extra: (
												<LinkedAccountsBlock
													userId={data.personalInfo.id ?? ''}
												/>
											),
									  }),
						},
				  ]
				: []),
		],
	};
};
