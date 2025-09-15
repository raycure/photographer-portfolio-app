import { useModalStore } from '@/src/stores/ModalStore';
import { CustomIconProps } from '../UI/UITypes';
import LinkedAccountsOtherBlock from '../Modal/LinkedAccountsOtherBlock';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import UserContext from '@/src/context/UserContext';
import { useContext } from 'react';
import LinkedAccountsPersonalBlock from '../Modal/LinkedAccountsPersonalBlock';
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
				onPress: () =>
					openModal({
						title: 'Associated Accounts',
						extra: isPersonal ? (
							<LinkedAccountsPersonalBlock />
						) : (
							<LinkedAccountsOtherBlock />
						),
						buttons: {
							list: [
								{
									type: 'general',
									content: 'Save',
									onPress: () => useModalStore.getState().closeModal(),
								},
							],
						},
					}),
			},
		],
	};
};
