import { useColors } from '@/src/hooks/useColors';
import { Text } from '../Themed';
import { ProfilePublicHeaderStyles } from './ProfileStyles';
import { useLocalSearchParams } from 'expo-router';
import { dummyUsers } from '@/src/constants/dummyUsers';
import CustomIcon from '../UI/CustomIcon';
import { View } from 'react-native';

export default function ProfilePublicHeader() {
	const colors = useColors();
	const { userId } = useLocalSearchParams();
	const styles = ProfilePublicHeaderStyles;
	const user = dummyUsers.find((item) => item.personalInfo.id === userId);
	return (
		<View style={styles.outerContainer}>
			<Text style={[styles.title, { color: colors.tint }]}>
				@{user?.personalInfo.username}
			</Text>
			{user?.personalInfo.premium && (
				<CustomIcon
					collectionKey='fa6'
					name='crown'
					size={18}
					color={colors.accentOrange}
				/>
			)}
		</View>
	);
}
