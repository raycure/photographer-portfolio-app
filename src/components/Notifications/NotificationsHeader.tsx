import { View } from 'react-native';
import CustomButton from '../UI/CustomButton';
import { useNotificationStore } from '@/src/stores/NotificationStore';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { NotificationsHeaderStyles } from './NotificationsStyles';

export default function NotificationsHeader() {
	const notificationStore = useNotificationStore();
	const colors = useColors();
	const setAllNotifSeen = () => {
		notificationStore.setAllSeen();
	};
	const styles = NotificationsHeaderStyles;
	return (
		<View style={styles.outerContainer}>
			<Text style={styles.title}>Notifications</Text>
			<CustomButton
				type='general'
				onPress={setAllNotifSeen}
				textStyle={styles.buttonText}
				style={styles.button}
				backgroundColor={colors.primary600}
				content='Mark all as read'
			/>
		</View>
	);
}
