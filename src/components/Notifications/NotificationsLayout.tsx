import { FlatList } from 'react-native';
import { View } from '../Themed';
import NotificationItem from './NotificationItem';
import { NotificationsLayoutStyles } from './NotificationsStyles';
import { useNotificationStore } from '@/src/stores/NotificationStore';

export default function NotificationsLayout() {
	const styles = NotificationsLayoutStyles;
	const notificationStore = useNotificationStore();
	const notificationsData = notificationStore.notifications;
	return (
		<View style={styles.outerContainer}>
			<FlatList
				data={notificationsData}
				renderItem={({ item }) => {
					return <NotificationItem {...item} />;
				}}
				keyExtractor={(item) => item.notificationId}
			/>
		</View>
	);
}
