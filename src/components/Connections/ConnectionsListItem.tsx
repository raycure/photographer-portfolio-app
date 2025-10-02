import { Text, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import CustomButton from '../UI/CustomButton';
import { UserPersonalInfo } from '@/src/stores/StoreTypes';
import { useColors } from '@/src/hooks/useColors';
import { ConnectionsListItemStyles } from './ConnectionsStyles';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { images } from '@/src/constants/dummyImages';
import { useRef, useState } from 'react';

export default function ConnectionsListItem({
	userpresonalInfo,
}: {
	userpresonalInfo: UserPersonalInfo;
}) {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const [pendingUnfollow, setPendingUnfollow] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const followingIds = userInfoStore.social.followingAccounts;
	const following = followingIds.includes(userpresonalInfo.id!);
	const styles = ConnectionsListItemStyles;
	const image = images.find((image) => {
		return image.imageId === userpresonalInfo.imageId;
	})?.link;
	const onButtonPress = () => {
		if (following) {
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
	return (
		<View style={styles.outerContainer}>
			<CircularPhoto source={image} size='small' />
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
				content={!pendingUnfollow && following ? 'Unfollow' : 'Follow'}
				backgroundColor={following ? colors.primary400 : colors.accentBlue}
			/>
		</View>
	);
}
