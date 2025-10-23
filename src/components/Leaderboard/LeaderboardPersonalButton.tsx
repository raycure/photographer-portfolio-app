import { Pressable, Text, View } from 'react-native';
import { LeaderboardPersonalButtonStyles } from './LeaderboardStyles';
import RankIndicator from './RankIndicator';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useColors } from '@/src/hooks/useColors';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import LeaderboardLikeButton from './LeaderboardLikeButton';

export default function LeaderboardPersonalButton() {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const userId = userInfoStore.personalInfo.id;
	const entry = dummyChallengeData.entries.find(
		(entry) => entry.userId === userId
	);

	const onPress = () => {};
	const styles = LeaderboardPersonalButtonStyles;
	return (
		<Pressable
			style={[styles.outerContainer, { backgroundColor: colors.tint }]}
			onPress={onPress}
		>
			<RankIndicator rank={entry?.rank[0]!} />
			<Text style={styles.text}>@{entry?.username}</Text>
			<View style={styles.likeContainer}>
				<Text style={[{ color: colors.negativeTint }, styles.likeText]}>
					{entry?.likes.length}
				</Text>
				<CustomIcon
					size={20}
					collectionKey='oct'
					color={colors.accentRed}
					name={'heart-fill'}
				/>
			</View>
		</Pressable>
	);
}
