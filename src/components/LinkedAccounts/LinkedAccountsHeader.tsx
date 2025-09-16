import { View } from 'react-native';
import { Text } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { LinkedAccountsHeaderStyles } from './LinkedAccountsStyles';
import { useModalStore } from '@/src/stores/ModalStore';
import LinkAccountBlock from '../Modal/LinkAccountBlock';

export default function LinkedAccountsHeader() {
	const openModal = useModalStore((state) => state.openModal);
	const styles = LinkedAccountsHeaderStyles;
	const onAddPress = () =>
		openModal({
			title: 'Add a social account',
			content:
				"Add your social accounts below. Make sure not to include '@' in the username.",
			extra: <LinkAccountBlock />,
		});

	return (
		<View style={styles.outerContainer}>
			<Text style={styles.text}>Accounts</Text>
			<CustomButton
				type='icon'
				onPress={onAddPress}
				icon={({ color }) => (
					<CustomIcon
						style={styles.button}
						collectionKey='fa'
						name='plus-square-o'
						color={color}
					/>
				)}
			/>
		</View>
	);
}
