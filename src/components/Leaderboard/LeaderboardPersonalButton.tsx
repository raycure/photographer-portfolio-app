import { Pressable, Text, View } from 'react-native';
import GradientBackground from '../UI/GradientBackground';
import RankIndicator from './RankIndicator';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useColors } from '@/src/hooks/useColors';
import { LeaderboardPersonalButtonStyles } from './LeaderboardStyles';
import getArrowDirection from '@/src/utils/getArrowDirection';
import { LeaderboardPersonalButtonWrapper } from './LeaderboardTypes';

export default function LeaderboardPersonalButton() {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const styles = LeaderboardPersonalButtonStyles;
	const personaluserId = userInfoStore.personalInfo.id;
	const allEntries = dummyChallengeData.entries;
	const entry = allEntries.find(({ userId }) => {
		return userId === personaluserId;
	});
	const Wrapper = ({ children }: LeaderboardPersonalButtonWrapper) => (
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
				{children}
			</GradientBackground>
		</Pressable>
	);
	if (entry === undefined) {
		return (
			<Wrapper>
				<Text style={styles.text}>Join the fun! 🎉</Text>
			</Wrapper>
		);
	}
	const rank = entry.rank[0];
	const arrowDirection = getArrowDirection(entry.rank);
	return rank > 3 ? (
		<Wrapper>
			<View style={styles.textContainer}>
				<Text style={styles.username}>@{entry.username}</Text>
				<Text style={[styles.likes, { color: colors.accentGreen200 }]}>
					{entry.likes}
				</Text>
			</View>
			<RankIndicator
				tint={colors.primary600}
				arrowDirection={arrowDirection}
				rank={rank}
			/>
		</Wrapper>
	) : null;
}
