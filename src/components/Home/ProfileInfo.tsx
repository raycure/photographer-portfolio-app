import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { images } from '@/src/constants/dummyImages';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { UserID } from '@/src/stores/StoreTypes';
import FollowersButton from '../UI/FollowersButton';
import { BlurView } from 'expo-blur';
import { useColors } from '@/src/hooks/useColors';

export default function ProfileInfo({
	userId,
	blur = false,
	style,
}: {
	userId?: UserID;
	blur?: boolean;
	style?: ViewStyle;
}) {
	const colors = useColors();
	const user = dummyUsers.find((user) => {
		return user.personalInfo.id === userId;
	});
	const profilePic = images.find((image) => {
		return image.imageId === user?.personalInfo.imageId;
	})?.link;
	const innerContent = (
		<>
			<CircularPhoto size='xs' source={profilePic} />
			<View style={styles.innerConatiner}>
				<Text style={[styles.title, { color: colors.tint }]}>
					{user?.personalInfo.name}
				</Text>
				<View style={styles.buttonContainer}>
					<FollowersButton size='small' userId={user?.personalInfo.id} />
				</View>
			</View>
		</>
	);
	return blur ? (
		<BlurView style={styles.outerContainer}>{innerContent}</BlurView>
	) : (
		<View style={styles.outerContainer}>{innerContent}</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		gap: 8,
		padding: 6,
		paddingRight: 18,
		alignSelf: 'flex-start',
	},
	innerConatiner: { justifyContent: 'center' },
	buttonContainer: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
	title: { fontSize: 16, fontWeight: '600' },
	customFollowButton: {},
});
