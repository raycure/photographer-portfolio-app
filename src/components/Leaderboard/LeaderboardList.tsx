import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import LeaderboardListItem from './LeaderboardListItem';
import { FlatList } from 'react-native';

export default function LeaderboardList() {
	const entries = dummyChallengeData.entries.slice(3);
	return (
		<FlatList
			data={entries}
			renderItem={({ item }) => <LeaderboardListItem entry={item} />}
			keyExtractor={(item) => item.entryId}
			showsVerticalScrollIndicator={false}
		/>
	);
}
