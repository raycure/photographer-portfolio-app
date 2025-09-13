import { FlatList } from 'react-native';
import { View } from '../Themed';
import NotificationItem from './NotificationItem';
import { NotificationsLayoutStyles } from './NotificationsStyles';
import { NotificationItemProps } from './NotificationsTypes';
import { NotificationID } from '@/src/stores/StoreTypes';

export default function NotificationsLayout() {
	const styles = NotificationsLayoutStyles;
	const notificationsData: (NotificationItemProps & {
		notificationId: NotificationID;
	})[] = [
		{
			notificationId: 'not_001',
			type: 'FOLLOW',
			userId: 'user_001',
			date: '2025-06-01',
			seen: false,
		},
		{
			notificationId: 'not_002',
			type: 'CHALLENGE_PLACEMENT',
			userId: 'user_002',
			date: '2025-06-03',
			extra: { position: '1st' },
			seen: false,
		},
		{
			notificationId: 'not_003',
			type: 'LIKE_PICTURE',
			userId: 'user_003',
			date: '2025-07-05',
			seen: false,
		},
		{
			notificationId: 'not_004',
			type: 'FOLLOWING_ATTENDED_CHALLENGE',
			userId: 'user_002',
			date: '2025-08-07',
			seen: true,
		},
		{
			notificationId: 'not_005',
			type: 'FOLLOWING_PLACED_TOP3',
			userId: 'user_004',
			date: '2025-09-09',
			extra: { position: 3 },
			seen: true,
		},
		{
			notificationId: 'not_006',
			type: 'NEW_CHALLENGE',
			date: '2025-09-11',
			seen: true,
		},
	];
	return (
		<View style={styles.outerContainer}>
			<FlatList
				data={notificationsData}
				renderItem={({ item }) => {
					const { notificationId, ...rest } = item;
					return <NotificationItem {...rest} />;
				}}
				keyExtractor={(item) => item.notificationId}
			/>
		</View>
	);
}
