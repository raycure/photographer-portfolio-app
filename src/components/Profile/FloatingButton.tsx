import { Animated, Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { FloatingButtonStyles } from './ProfileStyles';
import { FloatingButtonProps } from './ProfileTypes';
import { useRef } from 'react';

export default function FloatingButton({
	onPress,
	size = 'medium',
	icon,
	style,
}: FloatingButtonProps) {
	const colors = useColors();
	const scale = useRef(new Animated.Value(1)).current;

	const handlePressIn = () => {
		Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }).start();
	};
	const handlePressOut = () => {
		Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
	};
	const animatedStyle = {
		transform: [{ scale }],
	};
	const styles = FloatingButtonStyles;
	return (
		<Animated.View style={[animatedStyle]}>
			<Pressable
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
				onPress={onPress}
				style={[
					styles.outerContainer,
					{ backgroundColor: colors.accentBlue },
					style,
					size === 'big'
						? styles.big
						: size === 'medium'
						? styles.medium
						: styles.small,
				]}
			>
				<CustomIcon
					size={size === 'big' ? 36 : size === 'medium' ? 30 : 24}
					{...icon}
				/>
			</Pressable>
		</Animated.View>
	);
}
