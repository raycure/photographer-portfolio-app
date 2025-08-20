import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';

export default function ChallengeHistoryHeaderButton() {
	const onInfoButtonPressed = () => {};
	return (
		<CustomButton
			type='icon'
			onPress={onInfoButtonPressed}
			icon={({ color }) => (
				<CustomIcon
					collectionKey='ion'
					name='information-circle-outline'
					color={color}
					size={32}
				/>
			)}
		/>
	);
}
