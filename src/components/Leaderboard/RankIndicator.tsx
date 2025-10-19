import { useColors } from '@/src/hooks/useColors';
import { getColorWithOpacity } from '@/src/utils/color';
import { Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { RankIndicatorProps } from './LeaderboardTypes';
import { RankIndicatorStyles } from './LeaderboardStyles';

export default function RankIndicator({
	rank,
	size = 'medium',
}: RankIndicatorProps) {
	const colors = useColors();
	const rankState =
		rank[0] > rank[1] ? false : rank[0] == rank[1] ? null : true;
	const bg =
		rank[0] > 9
			? '#151515'
			: rankState === true
			? colors.accentGreen400
			: rankState === false
			? colors.accentRed
			: '#151515';
	const iconName = rankState
		? 'triangle-up'
		: rankState === false
		? 'triangle-down'
		: 'dash';
	const styles = RankIndicatorStyles;
	return (
		<View style={styles.outerContainer}>
			<View
				style={[
					styles.innerContainer,
					{ backgroundColor: getColorWithOpacity(bg, 0.4) },
				]}
			>
				<Text style={styles.rank}>{rank[0]}</Text>
			</View>
			{rank[0] > 9 && (
				<CustomIcon
					collectionKey='oct'
					name={iconName}
					size={rankState === null ? 17 : 22}
				/>
			)}
		</View>
	);
}
