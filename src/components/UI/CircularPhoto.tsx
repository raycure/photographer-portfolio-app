import { useColors } from '@/src/hooks/useColors';
import { Image } from 'react-native';
import { CircularPhotoStyles } from './UIStyles';
import { CircularPhotoProps } from './UITypes';

export default function CircularPhoto({ size, source }: CircularPhotoProps) {
	const colors = useColors();
	const styles = CircularPhotoStyles;
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
