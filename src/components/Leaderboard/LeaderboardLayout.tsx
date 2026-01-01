import { FlatList, ScrollView } from 'react-native';
import { View } from '../Themed';
import LeaderboardListItem from './LeaderboardListItem';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { EntryID } from '@/src/stores/StoreTypes';
import { LeaderboardLayoutStyles } from './LeaderboardStyles';
import LeaderboardPersonalButton from './LeaderboardPersonalButton';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import LeaderboardHeader from './LeaderboardHeader';
import { padColumns } from '@/src/utils/padColumns';
export default function LeaderboardLayout() {
	const userInfoStore = useUserInfoStore();
	const data = dummyChallengeData.entries;
	const group1 = data.slice(0, 1);
	const group2 = data.slice(1, 3);
	const group2Padded = padColumns(group2, 2, (i) => ({
		entryId: `__empty-${i}`,
	}));
	const group3 = data.slice(3, 9);
	const group3Padded = padColumns(group3, 3, (i) => ({
		entryId: `__empty-${i}`,
	}));
	const group4 = data.slice(9, 25);

	const topNine = ({ item }: { item: { entryId: EntryID } }) => {
		if ('__empty' in item) {
			return <View style={{ flex: 1 }} />;
		}
		return (
			<LeaderboardListItem
				ratio={dummyChallengeData.photoRatio}
				entryId={item.entryId}
				topNine
			/>
		);
	};
	const rest = ({ item }: { item: { entryId: EntryID } }) => (
		<LeaderboardListItem
			ratio={dummyChallengeData.photoRatio}
			entryId={item.entryId}
		/>
	);
	const styles = LeaderboardLayoutStyles;
	const myEntry = data.find(
		(entry) => entry.userId === userInfoStore.personalInfo.id
	);
	return (
		<View style={styles.outerContainer}>
			<ScrollView contentContainerStyle={styles.list}>
				<LeaderboardHeader />
				{group2.length == 2 ? (
					<>
						<FlatList
							data={group1}
							renderItem={topNine}
							keyExtractor={(item) => item.entryId.toString()}
							scrollEnabled={false}
							numColumns={1}
						/>
						<FlatList
							data={group2Padded}
							renderItem={topNine}
							keyExtractor={(item) => item.entryId.toString()}
							scrollEnabled={false}
							numColumns={2}
							columnWrapperStyle={styles.gapBig}
							contentContainerStyle={styles.gapBig}
						/>
					</>
				) : (
					<FlatList
						data={[...group1, ...group2]}
						renderItem={rest}
						keyExtractor={(item) => item.entryId.toString()}
						scrollEnabled={false}
						numColumns={1}
						contentContainerStyle={styles.gapSmall}
					/>
				)}
				{group3.length > 0 && (
					<FlatList
						data={group3Padded}
						renderItem={topNine}
						keyExtractor={(item) => item.entryId.toString()}
						scrollEnabled={false}
						numColumns={3}
						columnWrapperStyle={styles.gapBig}
						contentContainerStyle={styles.gapBig}
					/>
				)}
				{Array.isArray(myEntry?.rank) && myEntry.rank[0] > 9 && (
					<LeaderboardPersonalButton />
				)}
				{group4.length > 0 && (
					<FlatList
						data={group4}
						renderItem={rest}
						keyExtractor={(item) => item.entryId.toString()}
						scrollEnabled={false}
						numColumns={1}
						contentContainerStyle={styles.gapSmall}
					/>
				)}
			</ScrollView>
		</View>
	);
}
