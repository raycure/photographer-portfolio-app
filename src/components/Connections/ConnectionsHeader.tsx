import { Text } from 'react-native';
import { ConnectionsHeaderStyles } from './ConnectionsStyles';
import { useLocalSearchParams } from 'expo-router';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { useColors } from '@/src/hooks/useColors';

export function ConnectionsHeader() {
	const { userId } = useLocalSearchParams();
	const colors = useColors();
	const styles = ConnectionsHeaderStyles;
	const user = dummyUsers.find((item) => item.personalInfo.id === userId);
	return (
		<Text style={[styles.title, { color: colors.tint }]}>
			@{user?.personalInfo.username}
		</Text>
	);
}
