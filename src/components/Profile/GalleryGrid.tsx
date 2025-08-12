import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { FlatList } from 'react-native';
import { View } from '../Themed';
import GalleryGridItem from './GalleryGridItem';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { GalleryGridStyles } from './ProfileStyles';
import { AttendedChallenges } from '@/src/stores/StoreTypes';

export default function GalleryGrid() {
	const userInfoStore = useUserInfoStore();
	const userData = useContext(UserContext);
	const isPersonal = userData.personalInfo.id === userInfoStore.personalInfo.id;
	const savedWins =
		userInfoStore.stats.attendedChallenges?.filter((challenge) => {
			return challenge.rank <= 3 || challenge.saved;
		}) || [];
	const data: (AttendedChallenges | 'add')[] = isPersonal
		? ['add', ...savedWins]
		: savedWins;
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
