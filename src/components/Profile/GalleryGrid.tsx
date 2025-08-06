import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { FlatList } from 'react-native';
import { View } from '../Themed';
import GalleryGridItem from './GalleryGridItem';
import { Wins } from '@/src/stores/StoreTypes';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { GalleryGridStyles } from './ProfileStyles';

export default function GalleryGrid() {
	const userInfoStore = useUserInfoStore();
	const userData = useContext(UserContext);
	const isPersonal = userData.personalInfo.id === userInfoStore.personalInfo.id;
	const savedWins =
		userInfoStore.stats.wins?.filter((item) => item.saved) || [];
	const data: (Wins | 'add')[] = isPersonal ? ['add', ...savedWins] : savedWins;
	const styles = GalleryGridStyles;
	return (
		<View style={styles.outerContainer}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => <GalleryGridItem data={item} />}
				keyExtractor={(item, index) => index.toString()}
				numColumns={3}
				columnWrapperStyle={styles.columnStyle}
				contentContainerStyle={styles.columnStyle}
				style={styles.outerContainer}
			/>
		</View>
	);
}
