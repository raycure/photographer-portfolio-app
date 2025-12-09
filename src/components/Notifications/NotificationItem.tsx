import { ImageSourcePropType, Pressable, Text, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { images } from '@/src/constants/dummyImages';
import CustomIcon from '../UI/CustomIcon';
import { getTimeAgo } from '@/src/utils/getTimeAgo';
import { useColors } from '@/src/hooks/useColors';
import { notificationTemplates } from './NotificationTemplates';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { NotificationItemStyles } from './NotificationsStyles';
import { useRouter } from 'expo-router';
import { Notification } from '@/src/stores/StoreTypes';
import { useNotificationStore } from '@/src/stores/NotificationStore';

export default function NotificationItem({
	type,
	content,
	userId,
	date,
	extra,
	seen,
	navigate,
	notificationId,
}: Notification) {
	const colors = useColors();
	const router = useRouter();
	const notificationStore = useNotificationStore();
	const user = dummyUsers.find((user) => {
		return user.personalInfo.id === userId;
	})?.personalInfo;
	const imageLink = images.find((image) => {
		return image.imageId === user?.imageId;
	})?.link;
	const dateString = getTimeAgo(date);

	let displayContent: string;

	if (type === 'CUSTOM' && content) {
		displayContent = content;
	} else if (type !== 'CUSTOM') {
		displayContent = notificationTemplates()[type](extra);
	} else {
		displayContent = '';
	}
	const onNotificationPress = () => {
		notificationStore.setNotifSeen(notificationId);
		if (navigate) {
			router.push({ pathname: navigate.path as any, params: navigate.params });
		}
	};
	const styles = NotificationItemStyles;
	return (
		<Pressable
			onPress={onNotificationPress}
			style={[
				styles.outerContainer,
				!seen && { backgroundColor: colors.primary600 },
			]}
		>
			{imageLink ? (
				<CircularPhoto
					userId={userId!}
					source={imageLink as ImageSourcePropType}
					size='xs'
				/>
			) : (
				<View
					style={[
						styles.circularContainer,
						{ backgroundColor: colors.primary400 },
					]}
				>
					<CustomIcon collectionKey='ion' name='notifications' />
				</View>
			)}
			<Text style={[styles.text, { color: colors.tint }]}>
				{user && <Text style={styles.username}>{user.username}</Text>}
				{displayContent}{' '}
				<Text style={{ color: colors.primary200 }}>{dateString}</Text>
			</Text>
		</Pressable>
	);
}
