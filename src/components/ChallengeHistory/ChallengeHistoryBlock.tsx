import { View } from 'react-native';
import ChallengeHistoryBlockHeader from './ChallengeHistoryBlockHeader';
import ChallengeHistoryBlockItem from './ChallengeHistoryBlockItem';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';
import { Badge1SVG, Badge2SVG, Badge3SVG } from '@/src/constants/svgs';
import CustomIcon from '../UI/CustomIcon';
import { ChallengeHistoryBlockStyles } from './ChallengeHistoryStyles';
import { ChallengeHistoryBlockProps } from './ChallengeHistoryTypes';

export default function ChallengeHistoryBlock({
	data,
}: ChallengeHistoryBlockProps) {
	const colors = useColors();
	const badges: Record<number, React.FC> = {
		0: Badge1SVG,
		1: Badge2SVG,
		2: Badge3SVG,
	};
	const styles = ChallengeHistoryBlockStyles;
	return (
		<View
			style={[styles.outerContainer, { backgroundColor: colors.primary500 }]}
		>
			<ChallengeHistoryBlockHeader
				theme={data.challengeTheme}
				date={data.challengeDates}
				entries={data.entries}
			/>
			<LineSeperator color={colors.primary300} style={styles.lineSeperator} />
			<View style={styles.innerContainer}>
				{data.winners.map((entry, index) => {
					const Badge = badges[index];
					return (
						<View key={index}>
							<CustomIcon style={styles.badgeIcon} size={30} svg={<Badge />} />
							<ChallengeHistoryBlockItem entry={entry} />
						</View>
					);
				})}
			</View>
		</View>
	);
}
