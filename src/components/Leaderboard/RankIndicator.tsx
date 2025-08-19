import { View } from 'react-native';
import { Text } from '../Themed';
import TintedBackground from '../UI/TintedBackground';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { RankIndicatorStyles } from './LeaderboardStyles';
import { RankIndicatorProps } from './LeaderboardTypes';

export default function RankIndicator({
	arrowDirection = 'neutral',
	row = true,
	rank,
	tint,
}: RankIndicatorProps) {
	const colors = useColors();
	const styles = RankIndicatorStyles;
	const innerContent = (
		<CustomIcon
			name={arrowDirection !== 'neutral' ? 'triangle' : 'minus'}
			collectionKey={arrowDirection !== 'neutral' ? 'ion' : 'fa6'}
			style={[
				arrowDirection === 'up'
					? styles.iconUpRow
					: arrowDirection !== 'neutral' && row
					? styles.iconDownRow
					: styles.iconDown,
			]}
			size={row ? 13 : 15}
			color={arrowDirection === 'up' ? colors.accentGreen400 : colors.gray200}
		/>
	);
	return (
		<View style={row ? styles.outerContainerRow : styles.outerContainerColumn}>
			<Text
				style={[
					styles.number,
					{ color: colors.gray200 },
					row ? undefined : styles.numberColumn,
				]}
			>
				{rank}
			</Text>
			{row ? (
				<TintedBackground
					opacity={0.3}
					color={tint ? tint : colors.primary200}
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
