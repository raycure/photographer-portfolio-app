import { FlatList } from 'react-native';
import { View } from '../Themed';
import ChallengeHistoryBlock from './ChallengeHistoryBlock';
import { dummyChallengeHistory } from '@/src/constants/dummyChallengeHistory';
import { ChallengeHistory } from '@/src/constants/dataTypes';
import { ChallengeHistoryLayoutStyles } from './ChallengeHistoryStyles';

export default function ChallengeHistoryLayout() {
	const challengeHistoryData: ChallengeHistory[] = dummyChallengeHistory;
	const styles = ChallengeHistoryLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<FlatList
				data={challengeHistoryData}
				renderItem={({ item }) => <ChallengeHistoryBlock data={item} />}
				keyExtractor={(item) => item.challengeId}
				contentContainerStyle={styles.columnStyle}
			/>
		</View>
	);
}
