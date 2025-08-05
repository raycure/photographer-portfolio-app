import { useColors } from '@/src/hooks/useColors';
import { View } from '../Themed';
import LineSeperator from '../UI/LineSeperator';
import GalleryGrid from './GalleryGrid';
import ProfileHeader from './ProfileHeader';
import ProfileStatistics from './ProfileStatistics';

export default function ProfileLayout() {
	const colors = useColors();
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View
				style={{
					paddingHorizontal: 18,
					paddingBottom: 4,
					alignSelf: 'stretch',
					gap: 12,
				}}
			>
				<ProfileHeader />
				<ProfileStatistics />
			</View>
			<LineSeperator color={colors.primary300} style={{ marginBottom: 1 }} />
			<GalleryGrid />
		</View>
	);
}
