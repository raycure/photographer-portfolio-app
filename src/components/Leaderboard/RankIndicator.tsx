import { View } from 'react-native';
import { Text } from '../Themed';
import TintedBackground from '../UI/TintedBackground';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { RankIndicatorStyles } from './LeaderboardStyles';
import { RankIndicatorProps } from './LeaderboardTypes';

export default function RankIndicator({
	directionUp = true,
	row = true,
	rank,
}: RankIndicatorProps) {
	const colors = useColors();
	const styles = RankIndicatorStyles;
	const innerContent = (
		<CustomIcon
			name='triangle'
			collectionKey='ion'
			style={[
				directionUp
					? styles.iconUpRow
					: row
					? styles.iconDownRow
					: styles.iconDown,
			]}
			size={row ? 13 : 15}
			color={directionUp ? colors.accentGreen400 : colors.gray200}
		/>
	);
	return (
		<View style={row ? styles.outerContainerRow : styles.outerContainerColumn}>
			<Text
				style={[
					styles.number,
					{ color: colors.gray200 },
					row ? undefined : styles.numberColumn,
					directionUp ? { color: colors.accentGreen400 } : undefined,
				]}
			>
				{rank}
			</Text>
			{row ? (
				<TintedBackground
					opacity={0.3}
					color={colors.primary200}
					style={styles.tintedBackgound}
				>
					{innerContent}
				</TintedBackground>
			) : (
				innerContent
			)}
		</View>
	);
}
