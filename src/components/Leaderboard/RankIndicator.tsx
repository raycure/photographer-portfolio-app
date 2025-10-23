import { getColorWithOpacity } from '@/src/utils/color';
import { Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { RankIndicatorProps } from './LeaderboardTypes';
import { RankIndicatorStyles } from './LeaderboardStyles';

export default function RankIndicator({ rank, style }: RankIndicatorProps) {
	const isSimpleRank = typeof rank === 'number';
	const currentRank = isSimpleRank ? rank : rank[0];
	const previousRank = isSimpleRank ? rank : rank[1];
	const rankState = isSimpleRank
		? null
		: currentRank > previousRank
		? false
		: currentRank === previousRank
		? null
		: true;
	const iconName = {
		true: 'triangle-up',
		false: 'triangle-down',
		null: 'dash',
	}[String(rankState)];
	const styles = RankIndicatorStyles;
	return (
		<View style={[styles.outerContainer, !isSimpleRank && styles.withArrow]}>
			<View
				style={[
					styles.innerContainer,
					{
						backgroundColor: getColorWithOpacity(
							'#151515',
							!isSimpleRank ? 0.4 : 0.3
						),
					},
					style,
				]}
			>
				<Text style={styles.rank}>{currentRank}</Text>
			</View>
			{!isSimpleRank && (
				<CustomIcon
					collectionKey='oct'
					name={iconName}
					size={rankState === null ? 16 : 22}
				/>
			)}
		</View>
	);
}
