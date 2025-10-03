import { Pressable } from 'react-native';
import CustomIcon from './CustomIcon';
import { Text } from '../Themed';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useColors } from '@/src/hooks/useColors';
import { FollowButtonProps } from './UITypes';
import { FollowButtonStyles } from './UIStyles';

export default function FollowButton({
	circular = true,
	userId,
	size = 'medium',
}: FollowButtonProps) {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const userpresonalInfo = userInfoStore.personalInfo;
	const userFollowingIds = userInfoStore.social.followingAccounts;
	const isFollowing = userFollowingIds.includes(userId);
	const onButtonPress = () => {
		if (isFollowing) {
			userInfoStore.unfollowUser(userId!);
		} else {
			userInfoStore.followUser(userId!);
		}
	};
	let outerContainerStyle;
	const styles = FollowButtonStyles;
	if (!circular) {
		outerContainerStyle = { ...styles.container, borderColor: colors.tint };
	} else if (size === 'medium') {
		outerContainerStyle = {
			...styles.circularContainer,
			backgroundColor: colors.negativeTint,
		};
	} else {
		outerContainerStyle = {
			...styles.circularContainer,
			...styles.circularContainerSmall,
			backgroundColor: colors.negativeTint,
		};
	}

	if (userpresonalInfo.id === userId || size === 'xl' || size === 'big') {
		return null;
	}
	return (
		<Pressable
			onPress={onButtonPress}
			style={({ pressed }) => [
				outerContainerStyle,
				pressed && { opacity: 0.7 },
			]}
		>
			{circular ? (
				<CustomIcon
					size={size === 'medium' ? 16 : 14}
					collectionKey='fe'
					name={isFollowing ? 'check' : 'plus'}
					style={!isFollowing ? styles.icon : styles.followingIcon}
				/>
			) : (
				<Text>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
			)}
		</Pressable>
	);
}
