import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { ChallengeHistoryInfo } from '../Modal/modals';

export default function ChallengeHistoryHeaderButton() {
	const onInfoButtonPressed = () => ChallengeHistoryInfo();
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
