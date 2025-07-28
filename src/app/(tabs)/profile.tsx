import GalleryGrid from '@/src/components/Profile/GalleryGrid';
import ProfileHeader from '@/src/components/Profile/ProfileHeader';
import ProfileStatistics from '@/src/components/Profile/ProfileStatistics';
import { View } from '@/src/components/Themed';
import { StyleSheet } from 'react-native';

export default function ProfileScreen() {
	const userInfo = {};
	return (
		<View style={styles.container}>
			<ProfileHeader />
			<ProfileStatistics />
			<GalleryGrid />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
