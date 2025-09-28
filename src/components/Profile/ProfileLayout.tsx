import { useColors } from '@/src/hooks/useColors';
import { View } from '../Themed';
import LineSeperator from '../UI/LineSeperator';
import GalleryGrid from './GalleryGrid';
import ProfileHeader from './ProfileHeader';
import ProfileStatistics from './ProfileStatistics';
import { ProfileLayoutStyles } from './ProfileStyles';
import FloatingActionsContainer from './FloatingActionsContainer';
import ImageInfoModal from '../Modal/ImageInfoModal';

export default function ProfileLayout() {
	const colors = useColors();
	const styles = ProfileLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<ImageInfoModal />
			<View style={styles.innerContainer}>
				<ProfileHeader />
				<ProfileStatistics />
			</View>
			<LineSeperator color={colors.primary300} style={styles.lineSeperator} />
			<GalleryGrid />
			<FloatingActionsContainer />
		</View>
	);
}
