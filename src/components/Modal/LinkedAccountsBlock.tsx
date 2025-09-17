import { Linking, Pressable, View } from 'react-native';
import LinkedAccountListItem from '../LinkedAccounts/LinkedAccountListItem';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { LinkedAccountsBlockStyles } from './ModalStyles';
import { LinkedAccountsBlockProps } from './ModalTypes';

export default function LinkedAccountsBlock({
	userId,
}: LinkedAccountsBlockProps) {
	const colors = useColors();
	const user = dummyUsers.find((user) => user.personalInfo.id === userId);
	const socialsList = user?.social.socialMedia;
	const styles = LinkedAccountsBlockStyles;
	return (
		<View style={styles.outerContainer}>
			{socialsList &&
				socialsList.map((item, index) => {
					return (
						<View key={index}>
							{index > 0 && (
								<LineSeperator
									style={styles.lineSeperator}
									color={colors.primary400}
								/>
							)}
							<Pressable onPress={() => item.url && Linking.openURL(item.url)}>
								<LinkedAccountListItem data={{ ...item, isPersonal: false }} />
							</Pressable>
						</View>
					);
				})}
		</View>
	);
}
