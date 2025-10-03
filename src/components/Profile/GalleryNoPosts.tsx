import { Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { CameraOSVG } from '@/src/constants/svgs';
import { GalleryNoPostsStyles } from './ProfileStyles';

export default function GalleryNoPosts() {
	const colors = useColors();
	const styles = GalleryNoPostsStyles;
	return (
		<View style={styles.outerContainer}>
			<View style={[styles.innerContainer, { borderColor: colors.tint }]}>
				<CustomIcon svg={<CameraOSVG color={colors.tint} />} size={60} />
			</View>
			<Text style={[styles.title, { color: colors.tint }]}>No Posts Yet</Text>
		</View>
	);
}
