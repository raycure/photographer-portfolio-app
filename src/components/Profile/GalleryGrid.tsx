import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { FlatList, StyleSheet } from 'react-native';
import { View } from '../Themed';
import GalleryGridItem from './GalleryGridItem';
import { Wins } from '@/src/stores/StoreTypes';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';

export default function GalleryGrid() {
	const userInfoStore = useUserInfoStore();
	const userData = useContext(UserContext);
	const isPersonal = userData.personalInfo.id === userInfoStore.personalInfo.id;
	const savedWins =
		userInfoStore.stats.wins?.filter((item) => item.saved) || [];
	const data: (Wins | 'add')[] = isPersonal ? ['add', ...savedWins] : savedWins;
	return (
		<View style={styles.outerContainer}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => <GalleryGridItem data={item} />}
				keyExtractor={(item, index) => index.toString()}
				numColumns={3}
				columnWrapperStyle={{ gap: 1 }}
				contentContainerStyle={{ gap: 1 }}
				style={styles.outerContainer}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1, alignSelf: 'stretch' },
});
