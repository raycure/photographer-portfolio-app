import { View } from 'react-native';
import { Text } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { LinkedAccountsHeaderStyles } from './LinkedAccountsStyles';
import { useTranslation } from 'react-i18next';
import { AddLinkedAccount } from '../Modal/modals';

export default function LinkedAccountsHeader() {
	const { t } = useTranslation();
	const styles = LinkedAccountsHeaderStyles;
	const onAddPress = () => AddLinkedAccount();
	return (
		<View style={styles.outerContainer}>
			<Text style={styles.text}>{t('LinkedAccounts.title')}</Text>
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
