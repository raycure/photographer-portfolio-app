import { View } from 'react-native';
import { Text } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { LinkedAccountsHeaderStyles } from './LinkedAccountsStyles';
import { useModalStore } from '@/src/stores/ModalStore';
import LinkAccountBlock from '../Modal/LinkAccountBlock';
import { useTranslation } from 'react-i18next';

export default function LinkedAccountsHeader() {
	const openModal = useModalStore((state) => state.openModal);
	const { t } = useTranslation();
	const styles = LinkedAccountsHeaderStyles;
	const onAddPress = () =>
		openModal({
			title: t('Modals.AddLinkedAccount.title'),
			content: t('Modals.AddLinkedAccount.text'),
			extra: <LinkAccountBlock />,
		});

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
