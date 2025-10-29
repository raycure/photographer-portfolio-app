import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { images } from '@/src/constants/dummyImages';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { UserID } from '@/src/stores/StoreTypes';
import FollowersButton from '../UI/FollowersButton';
import { BlurView } from 'expo-blur';
import { useColors } from '@/src/hooks/useColors';
import { PropsWithChildren } from 'react';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useRouter } from 'expo-router';

const ParentView = ({
	blur,
	style,
	children,
}: PropsWithChildren<{ blur: boolean; style?: ViewStyle }>) => {
	if (blur)
		return (
			<BlurView
				tint='dark'
				experimentalBlurMethod='none'
				intensity={50}
				style={[styles.outerContainer, style]}
			>
				{children}
			</BlurView>
		);
	return <View style={[styles.outerContainer, style]}>{children}</View>;
};
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
		return image.imageId === user?.personalInfo?.imageId;
	})?.link;
	const userInfoStore = useUserInfoStore();
	const router = useRouter();
	const isPersonal = userId === userInfoStore.personalInfo.id;
	const onUserPress = () => {
		if (isPersonal) {
			router.navigate('/(tabs)/profile');
		} else {
			router.push({
				pathname: '/(stack)',
				params: { userId: userId },
			});
		}
	};
	return (
		<ParentView blur={blur} style={style}>
			<CircularPhoto userId={userId!} size='xs' source={profilePic} />
			<View style={styles.innerConatiner}>
				<Text
					onPress={onUserPress}
					style={[styles.title, { color: colors.tint }]}
				>
					{user?.personalInfo?.name}
				</Text>
				<View style={styles.buttonContainer}>
					<FollowersButton size='small' userId={user?.personalInfo?.id} />
				</View>
			</View>
		</ParentView>
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
