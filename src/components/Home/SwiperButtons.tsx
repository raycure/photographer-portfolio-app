import { Animated, Pressable, StyleSheet } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { getColorWithOpacity } from '@/src/utils/color';
import { useColors } from '@/src/hooks/useColors';
import { useRef } from 'react';
export default function SwiperButtons({
	likeButton = true,
	onPress,
	swipeX,
}: {
	likeButton?: boolean;
	onPress: () => void;
	swipeX: Animated.Value;
}) {
	const colors = useColors();
	const color = likeButton ? colors.accentRed : colors.tint;
	const backgroundColor = likeButton
		? getColorWithOpacity(color, 0.2)
		: getColorWithOpacity(color, 0.2);
	const popAnim = useRef(new Animated.Value(1)).current;
	const handlePress = () => {
		onPress();
		Animated.parallel([
			Animated.spring(popAnim, {
				toValue: 1.1,
				useNativeDriver: true,
			}),
			Animated.spring(popAnim, {
				toValue: 1,
				friction: 2,
				useNativeDriver: true,
			}),
		]).start();
	};
	const swipeScale = swipeX.interpolate({
		inputRange: likeButton ? [0, 150] : [-150, 0],
		outputRange: likeButton ? [1, 1.1] : [1.2, 1],
		extrapolate: 'clamp',
	});

	const animatedStyle = {
		transform: [{ scale: Animated.multiply(popAnim, swipeScale) }],
	};
	return (
		<Animated.View style={[animatedStyle]}>
			<Pressable
				onPress={handlePress}
				style={[styles.outerContainer, { backgroundColor }]}
			>
				<CustomIcon
					collectionKey={'oct'}
					color={color}
					name={likeButton ? 'heart-fill' : 'x'}
					size={28}
					style={likeButton ? styles.likeIcon : undefined}
				/>
			</Pressable>
		</Animated.View>
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
