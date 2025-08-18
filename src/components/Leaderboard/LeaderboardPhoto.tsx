import { useColors } from '@/src/hooks/useColors';
import { Image } from 'react-native';
import { LeaderboardPhotoStyles } from './LeaderboardStyles';
import { LeaderboardPhotoProps } from './LeaderboardTypes';

export default function LeaderboardPhoto({
	size,
	source,
}: LeaderboardPhotoProps) {
	const colors = useColors();
	const styles = LeaderboardPhotoStyles;
	return (
		<Image
			source={{
				uri: 'https://reactnative.dev/img/tiny_logo.png',
				// Picture submitted by user to the challenge, not the profile pic
			}}
			style={[
				size === 'big'
					? styles.imageBig
					: size === 'medium'
					? styles.imageMedium
					: styles.imageSmall,
				styles.image,
				{ borderColor: colors.primary600 },
			]}
		/>
	);
}
