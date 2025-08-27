import { Text, View } from 'react-native';
import RankIndicator from './RankIndicator';
import CircularPhoto from '../UI/CircularPhoto';
import { LeaderboardWinnersConfig } from './LeaderboardConfig';
import { LeaderboardWinnersBlockStyles } from './LeaderboardStyles';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useColors } from '@/src/hooks/useColors';
import getArrowDirection from '@/src/utils/getArrowDirection';

export default function LeaderboardWinnersBlock() {
	const colors = useColors();
	const winnersConfig = LeaderboardWinnersConfig;
	const styles = LeaderboardWinnersBlockStyles;
	const challengeEntries = dummyChallengeData.entries; // Should be descending order by likes
	const topThree = challengeEntries.slice(0, 3);
	return (
		<View style={styles.outerContainer}>
			{winnersConfig.map((element, index) => {
				const user = topThree[element.rank - 1];
				const arrowDirection = getArrowDirection(user.rank);
				return (
					<View key={index} style={element.style}>
						{element.icon && element.icon}
						{element.rank !== 1 && (
							<RankIndicator
								rank={element.rank}
								arrowDirection={arrowDirection}
								row={false}
							/>
						)}
						<CircularPhoto size={element.photoSize} />
						<View style={styles.textContainer}>
							<Text style={[styles.username, { color: colors.gray100 }]}>
								@{user.username}
							</Text>
							<Text style={[styles.likes, { color: colors.accentGreen400 }]}>
								{user.likes}
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
}
