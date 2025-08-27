import { Pressable, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import RankIndicator from './RankIndicator';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import getTruncatedText from '@/src/utils/getTruncatedText';
import { LeaderboardListIItemStyles } from './LeaderboardStyles';
import getArrowDirection from '@/src/utils/getArrowDirection';
import { LeaderboardListItemProps } from './LeaderboardTypes';
export default function LeaderboardListItem({
	entry,
}: LeaderboardListItemProps) {
	const colors = useColors();
	const styles = LeaderboardListIItemStyles;
	return (
		<View style={[styles.row, styles.outerContainer]}>
			<Pressable>
				<CircularPhoto size='small' />
			</Pressable>
			<View
				style={[
					styles.row,
					styles.innerContainer,
					{ borderColor: colors.primary500 },
				]}
			>
				<View style={styles.textContainer}>
					<View style={[styles.row, styles.titleContainer]}>
						<Text style={[styles.title, { color: colors.tint }]}>
							{getTruncatedText(entry.name, 16)}
						</Text>
						<Text style={[styles.title, { color: colors.accentGreen200 }]}>
							{entry.likes}
						</Text>
					</View>
					<Text style={[styles.subtitle, { color: colors.primary200 }]}>
						@{entry.username}
					</Text>
				</View>
				<RankIndicator
					rank={entry.rank[0]}
					arrowDirection={getArrowDirection(entry.rank)}
				/>
			</View>
		</View>
	);
}
