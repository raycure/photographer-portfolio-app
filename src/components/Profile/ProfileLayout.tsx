import { View } from '../Themed';
import GalleryGrid from './GalleryGrid';
import ProfileHeader from './ProfileHeader';
import ProfileStatistics from './ProfileStatistics';

export default function ProfileLayout() {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ paddingHorizontal: 24, alignSelf: 'stretch' }}>
				<ProfileHeader />
				<ProfileStatistics />
			</View>
			<GalleryGrid />
		</View>
	);
}
