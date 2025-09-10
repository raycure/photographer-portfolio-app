import { Pressable, StyleSheet } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { getColorWithOpacity } from '@/src/utils/color';
import { useColors } from '@/src/hooks/useColors';
export default function SwiperButtons({ likeButton = true }) {
	const colors = useColors();
	const color = likeButton ? colors.accentRed : colors.tint;
	const backgroundColor = likeButton
		? getColorWithOpacity(color, 0.2)
		: getColorWithOpacity(color, 0.2);
	return (
		<Pressable style={[styles.outerContainer, { backgroundColor }]}>
			<CustomIcon
				collectionKey={'oct'}
				color={color}
				name={likeButton ? 'heart-fill' : 'x'}
				size={28}
				style={likeButton ? styles.likeIcon : undefined}
			/>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		width: 56,
		height: 56,
	},
	likeIcon: { bottom: -2 },
});
