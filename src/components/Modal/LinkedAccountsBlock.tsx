import { Linking, Pressable, StyleSheet, View } from 'react-native';
import LinkedAccountListItem from '../LinkedAccounts/LinkedAccountListItem';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { UserID } from '@/src/stores/StoreTypes';

export default function LinkedAccountsBlock({ userId }: { userId: UserID }) {
	const colors = useColors();
	const user = dummyUsers.find((user) => user.personalInfo.id === userId);
	const socialsList = user?.social.socialMedia;
	return (
		<View style={styles.outerContainer}>
			{socialsList &&
				socialsList.map((item, index) => {
					return (
						<View style={styles.innerContainer} key={index}>
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
const styles = StyleSheet.create({
	lineSeperator: { marginVertical: 0 },
	innerContainer: {},
	outerContainer: { width: '100%' },
});
