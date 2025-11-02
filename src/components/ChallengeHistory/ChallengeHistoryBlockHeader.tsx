import { Text, View } from 'react-native';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { daysFromToday } from '@/src/utils/daysFromToday';
import { useColors } from '@/src/hooks/useColors';
import CustomIcon from '../UI/CustomIcon';
import { ChallengeHistoryBlockHeaderStyles } from './ChallengeHistoryStyles';
import { ChallengeHistoryBlockHeaderProps } from './ChallengeHistoryTypes';

export default function ChallengeHistoryBlockHeader({
	theme,
	date,
	entries,
}: ChallengeHistoryBlockHeaderProps) {
	const colors = useColors();
	const days = daysFromToday(date.end);
	const styles = ChallengeHistoryBlockHeaderStyles;
	return (
		<View style={styles.outerContainer}>
			<SubtitleTitlePair subtitle='Theme' title={theme} size='small' />
			<View style={styles.sideContainer}>
				<Text style={[styles.date, { color: colors.primary200 }]}>
					{days} days
				</Text>
				<View style={styles.usersContainer}>
					<Text style={[styles.usersText, { color: colors.tint }]}>
						{entries}
					</Text>
					<CustomIcon collectionKey='oct' name='person' size={18} />
				</View>
			</View>
		</View>
	);
}
