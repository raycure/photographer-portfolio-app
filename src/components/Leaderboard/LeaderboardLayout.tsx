import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from '../Themed';
import LeaderboardListItem from './LeaderboardListItem';
const data = Array.from({ length: 25 }, (_, i) => ({
	id: i + 1,
	label: `Item ${i + 1}`,
}));
export default function LeaderboardLayout() {
	//const data = [{ userId: 'lskdjl' }];
	const group1 = data.slice(0, 1);
	const group2 = data.slice(1, 3);
	const group3 = data.slice(3, 9);
	const group4 = data.slice(9, 25);

	const topNine = ({ item }: { item: { id: number; label: string } }) => (
		<View style={styles.item}>
			<Text style={styles.text}>{item.label}</Text>
		</View>
	);
	const rest = ({ item }: { item: { id: number; label: string } }) => (
		<LeaderboardListItem entryId={'entry_001'} />
	);
	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ padding: 10, gap: 12 }}>
				<FlatList
					data={group1}
					renderItem={topNine}
					keyExtractor={(item) => item.id.toString()}
					scrollEnabled={false}
					numColumns={1}
				/>
				<FlatList
					data={group2}
					renderItem={topNine}
					keyExtractor={(item) => item.id.toString()}
					scrollEnabled={false}
					numColumns={2}
					columnWrapperStyle={styles.gapBig}
					contentContainerStyle={styles.gapBig}
				/>
				<FlatList
					data={group3}
					renderItem={topNine}
					keyExtractor={(item) => item.id.toString()}
					scrollEnabled={false}
					numColumns={3}
					columnWrapperStyle={styles.gapBig}
					contentContainerStyle={styles.gapBig}
				/>
				<FlatList
					data={group4}
					renderItem={rest}
					keyExtractor={(item) => item.id.toString()}
					scrollEnabled={false}
					numColumns={1}
					contentContainerStyle={styles.gapSmall}
				/>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	item: {
		flex: 1,
		aspectRatio: 0.8,
		borderRadius: 10,
		backgroundColor: '#103cdcff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontWeight: '600',
	},
	gapBig: { gap: 12 },
	gapSmall: { gap: 8 },
});
