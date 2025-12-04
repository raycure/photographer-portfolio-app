import { useColors } from '@/src/hooks/useColors';
import { Dimensions, View } from 'react-native';
import { CircularPhotoStyles } from './UIStyles';
import { CircularPhotoProps } from './UITypes';
import CustomIcon from './CustomIcon';
import FollowButton from './FollowButton';
import { Image } from 'expo-image';
const windowWidth = Dimensions.get('screen').width;
export default function CircularPhoto({
	size,
	customSize,
	followActive = true,
	source,
	userId,
}: CircularPhotoProps) {
	const colors = useColors();
	const styles = CircularPhotoStyles;
	const sizeBasedStyle =
		size === 'big'
			? styles.imageBig
			: size === 'medium'
			? styles.imageMedium
			: size === 'small'
			? styles.imageSmall
			: size === 'xl'
			? styles.imageXL
			: styles.imageXS;

	const isValidSource = typeof source === 'string' && source.trim().length > 0;
	if (isValidSource) {
		return (
			<View>
				<Image
					source={{ uri: source }}
					style={[
						sizeBasedStyle,
						styles.image,
						{ borderColor: colors.primary600 },
						customSize ? { width: customSize, height: customSize } : undefined,
					]}
				/>
				{followActive && !['xs'].includes(size!) && (
					<FollowButton userId={userId} size={size} />
				)}
			</View>
		);
	}
	const iconSize =
		size === 'big'
			? (windowWidth * 3) / 9
			: size === 'medium'
			? 68
			: size === 'small'
			? 58
			: size === 'xl'
			? (windowWidth * 4) / 9
			: 48;
	return (
		<View>
			<View
				style={[
					sizeBasedStyle,
					styles.image,
					styles.fakeUser,
					{ borderColor: colors.primary600, backgroundColor: colors.gray600 },
					customSize ? { width: customSize, height: customSize } : undefined,
				]}
			>
				<CustomIcon
					size={iconSize}
					name='user-circle'
					collectionKey='fa'
					color={colors.gray300}
				/>
			</View>
			{followActive && !['xs', 'small'].includes(size!) && (
				<FollowButton userId={userId} size={size} />
			)}
		</View>
	);
}
