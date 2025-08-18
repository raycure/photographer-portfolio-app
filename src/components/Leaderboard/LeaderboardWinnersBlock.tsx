import { Text, View } from 'react-native';
import RankIndicator from './RankIndicator';
import LeaderboardPhoto from './LeaderboardPhoto';
import { LeaderboardWinnersConfig } from './LeaderboardConfig';
import { LeaderboardWinnersBlockStyles } from './LeaderboardStyles';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { getChallengeEntriesByLikes } from '@/src/utils/getChallengeEntriesByLikes';
import { useColors } from '@/src/hooks/useColors';

export default function LeaderboardWinnersBlock() {
	const colors = useColors();
	const winnersConfig = LeaderboardWinnersConfig;
	const styles = LeaderboardWinnersBlockStyles;
	const challengeEntries = dummyChallengeData.entries;
	const { topThree } = getChallengeEntriesByLikes(challengeEntries);
	return (
		<View style={styles.outerContainer}>
			{winnersConfig.map((element, index) => {
				return (
					<View key={index} style={element.style}>
						{element.icon && element.icon}
						{element.rank !== 1 && (
							<RankIndicator
								rank={element.rank}
								directionUp={false}
								row={false}
							/>
						)}
						<LeaderboardPhoto size={element.photoSize} />
						<View style={styles.textContainer}>
							<Text style={[styles.username, { color: colors.gray100 }]}>
								@{topThree[element.rank - 1].username}
							</Text>
							<Text style={[styles.likes, { color: colors.accentGreen400 }]}>
								{topThree[element.rank - 1].likes}
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
}
