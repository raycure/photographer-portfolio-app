import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { FlatList } from 'react-native';
import { View } from '../Themed';
import GalleryGridItem from './GalleryGridItem';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { GalleryGridStyles } from './ProfileStyles';
import { AttendedChallenges } from '@/src/stores/StoreTypes';
import GalleryNoPosts from './GalleryNoPosts';

export default function GalleryGrid() {
	const userInfoStore = useUserInfoStore();
	const userData = useContext(UserContext);
	const isPersonal = userData.personalInfo.id === userInfoStore.personalInfo.id;
	const savedWins =
		userData.stats.attendedChallenges?.filter((challenge) => {
			return challenge.rank! <= 3 || challenge.saved;
		}) || [];
	const data: (AttendedChallenges | 'add')[] = isPersonal
		? ['add', ...savedWins]
		: savedWins;
	const styles = GalleryGridStyles;
	return (
		<View style={styles.outerContainer}>
			{data.length == 0 && !isPersonal ? (
				<GalleryNoPosts />
			) : (
				<FlatList
					data={data}
					renderItem={({ item, index }) => <GalleryGridItem data={item} />}
					keyExtractor={(item, index) => index.toString()}
					numColumns={3}
					columnWrapperStyle={styles.columnStyle}
					contentContainerStyle={styles.columnStyle}
					style={styles.outerContainer}
				/>
			)}
		</View>
	);
}
