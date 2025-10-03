import { Text, View } from 'react-native';
import { ConnectionsHeaderStyles } from './ConnectionsStyles';
import { useLocalSearchParams } from 'expo-router';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { useColors } from '@/src/hooks/useColors';
import FollowButton from '../UI/FollowButton';

export function ConnectionsHeader() {
	const { userId } = useLocalSearchParams();
	const colors = useColors();
	const styles = ConnectionsHeaderStyles;
	const normalizedUserId = Array.isArray(userId) ? userId[0] : userId;
	const user = dummyUsers.find(
		(item) => item.personalInfo.id === normalizedUserId
	);
	return (
		<View style={styles.outerContainer}>
			<Text style={[styles.title, { color: colors.tint }]}>
				@{user?.personalInfo.username}
			</Text>
			<FollowButton userId={normalizedUserId} circular={false} />
		</View>
	);
}
