import { useModalStore } from '@/src/stores/ModalStore';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';

export default function ChallengeHistoryHeaderButton() {
	const openModal = useModalStore((state) => state.openModal);
	const onInfoButtonPressed = () =>
		openModal({
			title: 'About Challenge History',
			content:
				'This page showcases past photography challenges, their winning photos, and key details about each event.',
			list: [
				{ icon: '🥇', content: 'View the winners from completed challenges.' },
				{
					icon: '📈',
					content: 'Learn about the challenge themes and participation stats.',
				},
				{
					icon: '🖼️',
					content: 'Get inspiration for future contests and photo ideas.',
				},
			],
			buttons: {
				configuration: 'row',
				list: [
					{
						type: 'general',
						content: 'Understood',
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
