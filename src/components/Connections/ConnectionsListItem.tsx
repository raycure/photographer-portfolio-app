import { ImageSourcePropType, Pressable, Text, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import CustomButton from '../UI/CustomButton';
import { UserPersonalInfo } from '@/src/stores/StoreTypes';
import { useColors } from '@/src/hooks/useColors';
import { ConnectionsListItemStyles } from './ConnectionsStyles';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { images } from '@/src/constants/dummyImages';
import { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function ConnectionsListItem({
	userpresonalInfo,
}: {
	userpresonalInfo: UserPersonalInfo;
}) {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const router = useRouter();
	const { t } = useTranslation();
	const [pendingUnfollow, setPendingUnfollow] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const followingIds = userInfoStore.social.followingAccounts;
	const isFollowing = followingIds.includes(userpresonalInfo.id!);
	const styles = ConnectionsListItemStyles;
	const image = images.find((image) => {
		return image.imageId === userpresonalInfo.imageId;
	})?.link;
	const onButtonPress = () => {
		if (isFollowing) {
			if (pendingUnfollow) {
				clearTimeout(timerRef.current!);
				timerRef.current = null;
				setPendingUnfollow(false);
			} else {
				setPendingUnfollow(true);
				timerRef.current = setTimeout(() => {
					userInfoStore.unfollowUser(userpresonalInfo.id!);
					setPendingUnfollow(false);
				}, 2000);
			}
		} else {
			userInfoStore.followUser(userpresonalInfo.id!);
		}
	};
	const onElementPress = () =>
		router.push({
			pathname: '/(stack)',
			params: { userId: userpresonalInfo.id },
		});
	return (
		<Pressable onPress={onElementPress} style={styles.outerContainer}>
			<CircularPhoto
				userId={userpresonalInfo.id!}
				source={image as ImageSourcePropType}
				size='small'
			/>
			<View style={styles.textContainer}>
				<Text style={[styles.title, { color: colors.tint }]}>
					{userpresonalInfo.name}
				</Text>
				<Text style={[styles.subtitle, { color: colors.primary100 }]}>
					@{userpresonalInfo.username}
				</Text>
			</View>
			<CustomButton
				type='general'
				textStyle={styles.customButtonText}
				style={styles.customButton}
				onPress={onButtonPress}
				content={
					!pendingUnfollow && isFollowing
						? t('UI.Buttons.Unfollow')
						: t('UI.Buttons.Follow')
				}
				backgroundColor={isFollowing ? colors.primary400 : colors.accentBlue}
			/>
		</Pressable>
	);
}
