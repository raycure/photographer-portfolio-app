import { useModalStore } from '@/src/stores/ModalStore';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useTranslation } from 'react-i18next';

export default function ChallengeHistoryHeaderButton() {
	const { t } = useTranslation();
	const openModal = useModalStore((state) => state.openModal);
	const list = t('Modals.ChallengeHistoryInfo.list', {
		returnObjects: true,
	}) as string[];
	const onInfoButtonPressed = () =>
		openModal({
			title: t('Modals.ChallengeHistoryInfo.title'),
			content: t('Modals.ChallengeHistoryInfo.text'),
			list: [
				{ icon: '🥇', content: list[0] },
				{
					icon: '📈',
					content: list[1],
				},
				{
					icon: '🖼️',
					content: list[2],
				},
			],
			buttons: {
				configuration: 'row',
				list: [
					{
						type: 'general',
						content: t('UI.Buttons.Understood'),
						onPress: () => useModalStore.getState().closeModal(),
					},
				],
			},
		});

	return (
		<CustomButton
			type='icon'
			onPress={onInfoButtonPressed}
			icon={({ color }) => (
				<CustomIcon
					collectionKey='ion'
					name='information-circle-outline'
					color={color}
					size={30}
				/>
			)}
		/>
	);
}
