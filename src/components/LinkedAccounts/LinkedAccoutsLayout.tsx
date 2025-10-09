import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { View } from '../Themed';
import LinkedAccountListItem from './LinkedAccountListItem';
import { LinkedAccountsLayoutStyles } from './LinkedAccountsStyles';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';

export default function LinkedAccountsLayout() {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const socialsList = userInfoStore.social.socialMedia;
	const styles = LinkedAccountsLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			{socialsList.map((item, index) => {
				return (
					<View key={item.social}>
						{index > 0 && (
							<LineSeperator
								style={styles.lineSeperator}
								color={colors.primary500}
							/>
						)}
						<LinkedAccountListItem data={{ ...item, isPersonal: true }} />
					</View>
				);
			})}
		</View>
	);
}
