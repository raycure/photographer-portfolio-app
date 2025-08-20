import { StyleSheet, View } from 'react-native';
import ChallengeHistoryBlockHeader from './ChallengeHistoryBlockHeader';
import ChallengeHistoryBlockItem from './ChallengeHistoryBlockItem';
import LineSeperator from '../UI/LineSeperator';
import { ChallengeHistory } from '@/src/constants/dataTypes';
import { useColors } from '@/src/hooks/useColors';

export default function ChallengeHistoryBlock({
	data,
}: {
	data: ChallengeHistory;
}) {
	const colors = useColors();
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
			<ChallengeHistoryBlockItem />
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 18,
		padding: 14,
	},
	lineSeperator: {
		height: 2,
		marginBlock: 4,
	},
});
