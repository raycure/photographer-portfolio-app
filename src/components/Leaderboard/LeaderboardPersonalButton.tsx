import { Pressable, Text, View } from 'react-native';
import GradientBackground from '../UI/GradientBackground';
import RankIndicator from './RankIndicator';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { getChallengeEntriesByLikes } from '@/src/utils/getChallengeEntriesByLikes';
import { useColors } from '@/src/hooks/useColors';
import { LeaderboardPersonalButtonStyles } from './LeaderboardStyles';

export default function LeaderboardPersonalButton() {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const personaluserId = userInfoStore.personalInfo.id;
	const { allEntries } = getChallengeEntriesByLikes(dummyChallengeData.entries);
	const entry = allEntries.find(({ userId }) => {
		return userId === personaluserId;
	});
	const rank = entry
		? allEntries.findIndex((e) => e.userId === entry.userId) + 1
		: 0;
	const styles = LeaderboardPersonalButtonStyles;
	return entry !== undefined && rank > 3 ? (
		<Pressable
			style={({ pressed }) =>
				pressed
					? [styles.buttonWrapper, styles.buttonPressed]
					: styles.buttonWrapper
			}
		>
			<GradientBackground
				style={styles.outerContainer}
				colors={['#44ac86ff', '#577bc9ff']}
				orientation='diagonal-r'
			>
				{entry === undefined ? (
					<Text style={styles.text}>Join the fun! 🎉</Text>
				) : (
					<>
						<View style={styles.textContainer}>
							<Text style={styles.username}>@{entry.username}</Text>
							<Text style={[styles.likes, { color: colors.accentGreen200 }]}>
								{entry.likes}
							</Text>
						</View>
						<RankIndicator
							tint={colors.primary600}
							directionUp={false}
							rank={rank}
						/>
					</>
				)}
			</GradientBackground>
		</Pressable>
	) : null;
}
