import { FlatList, ScrollView } from 'react-native';
import { View } from '../Themed';
import LeaderboardListItem from './LeaderboardListItem';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { EntryID } from '@/src/stores/StoreTypes';
import { LeaderboardLayoutStyles } from './LeaderboardStyles';
import LeaderboardPersonalButton from './LeaderboardPersonalButton';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

export default function LeaderboardLayout() {
	const userInfoStore = useUserInfoStore();
	const data = dummyChallengeData.entries;
	const group1 = data.slice(0, 1);
	const group2 = data.slice(1, 3);
	const group3 = data.slice(3, 9);
	const group4 = data.slice(9, 25);

	const topNine = ({ item }: { item: { entryId: EntryID } }) => (
		<LeaderboardListItem entryId={item.entryId} topNine={true} />
	);
	const rest = ({ item }: { item: { entryId: EntryID } }) => (
		<LeaderboardListItem entryId={item.entryId} />
	);
	const styles = LeaderboardLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<ScrollView contentContainerStyle={styles.list}>
				<FlatList
					data={group1}
					renderItem={topNine}
					keyExtractor={(item) => item.entryId.toString()}
					scrollEnabled={false}
					numColumns={1}
				/>
				<FlatList
					data={group2}
					renderItem={topNine}
					keyExtractor={(item) => item.entryId.toString()}
					scrollEnabled={false}
					numColumns={2}
					columnWrapperStyle={styles.gapBig}
					contentContainerStyle={styles.gapBig}
				/>
				<FlatList
					data={group3}
					renderItem={topNine}
					keyExtractor={(item) => item.entryId.toString()}
					scrollEnabled={false}
					numColumns={3}
					columnWrapperStyle={styles.gapBig}
					contentContainerStyle={styles.gapBig}
				/>
				{data.find((entry) => entry.userId === userInfoStore.personalInfo.id)
					?.rank[0]! > 9 && <LeaderboardPersonalButton />}
				<FlatList
					data={group4}
					renderItem={rest}
					keyExtractor={(item) => item.entryId.toString()}
					scrollEnabled={false}
					numColumns={1}
					contentContainerStyle={styles.gapSmall}
				/>
			</ScrollView>
		</View>
	);
}
