import { Text, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { images } from '@/src/constants/dummyImages';
import CustomIcon from '../UI/CustomIcon';
import { getTimeAgo } from '@/src/utils/getTimeAgo';
import { useColors } from '@/src/hooks/useColors';
import { NotificationItemProps } from './NotificationsTypes';
import { notificationTemplates } from './NotificationTemplates';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { NotificationItemStyles } from './NotificationsStyles';

export default function NotificationItem({
	type,
	content,
	userId,
	date,
	extra,
	seen,
}: NotificationItemProps) {
	const colors = useColors();
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
		displayContent = notificationTemplates[type](extra);
	} else {
		displayContent = '';
	}
	const styles = NotificationItemStyles;
	return (
		<View
			style={[
				styles.outerContainer,
				{ borderColor: colors.primary700 },
				!seen && { backgroundColor: colors.primary600 },
			]}
		>
			{imageLink ? (
				<CircularPhoto userId={userId!} source={imageLink} size='xs' />
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
		</View>
	);
}
