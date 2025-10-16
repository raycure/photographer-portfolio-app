import { Animated, Pressable, Text } from 'react-native';
import { View } from '../Themed';
import { useRef, useState } from 'react';
import GradientBackground from './GradientBackground';
import { CustomButtonProps } from './UITypes';
import TintedBackground from './TintedBackground';
import { StyleProps } from 'react-native-reanimated';
import { useColors } from '@/src/hooks/useColors';
import { CustomButtonStyles } from './UIStyles';

export default function CustomButton({
	content,
	icon,
	type = 'general',
	onPress,
	backgroundColor,
	textColor = 'white',
	gradientBackground,
	style,
	outerContainerStyle,
	textStyle,
	tintedBackground,
	disabled,
}: CustomButtonProps) {
	const [active, setActive] = useState<boolean>(false);
	const colors = useColors();
	const scale = useRef(new Animated.Value(1)).current;
	const disabledButtonStyle: StyleProps = {
		backgroundColor: colors.gray400,
	};

	const handlePressIn = () => {
		setActive(true);
		Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start();
	};
	const handlePressOut = () => {
		setActive(false);
		Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
	};
	const animatedStyle = {
		transform: [{ scale }],
	};
	const styles = CustomButtonStyles;
	const innerGeneralButtonContent = (
		<View
			style={[
				gradientBackground
					? { backgroundColor: 'transparent' }
					: backgroundColor
					? [{ backgroundColor: backgroundColor }, styles.innerContainer]
					: disabled
					? [disabledButtonStyle, styles.innerContainer]
					: [{ backgroundColor: colors.primary400 }, styles.innerContainer],
				style,
			]}
		>
			{content && (
				<Text style={[styles.text, { color: textColor }, textStyle]}>
					{content}
				</Text>
			)}

			{icon && (
				<View style={styles.iconWrapper}>
					{typeof icon === 'function'
						? icon({
								color: active === true ? colors.tint : colors.gray400,
						  })
						: icon}
				</View>
			)}
		</View>
	);
	const innerIconButtonContent = (
		<View style={{ backgroundColor: 'transparent' }}>
			{icon ? (
				tintedBackground ? (
					<TintedBackground
						type={tintedBackground?.type}
						{...(tintedBackground?.blur !== undefined
							? { blur: tintedBackground.blur }
							: {
									opacity: tintedBackground?.opacity,
									color: tintedBackground?.color,
							  })}
						style={[{ alignItems: 'center' }, style]}
					>
						{typeof icon === 'function'
							? icon({
									color: active === true ? colors.gray300 : colors.tint,
							  })
							: icon}
					</TintedBackground>
				) : typeof icon === 'function' ? (
					icon({
						color: active === true ? colors.gray300 : colors.tint,
					})
				) : (
					icon
				)
			) : null}
		</View>
	);
	const buttonContent =
		type == 'icon' ? innerIconButtonContent : innerGeneralButtonContent;

	return (
		<Animated.View
			style={[
				animatedStyle,
				type === 'stretched' ? styles.stretched : undefined,
				outerContainerStyle,
			]}
		>
			<Pressable
				onPress={!disabled ? onPress : () => {}}
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
			>
				{gradientBackground ? (
					<GradientBackground
						style={
							type == 'icon'
								? styles.gradientIconContainer
								: styles.innerContainer
						}
						colors={
							!disabled
								? gradientBackground.colors
								: [colors.gray400, colors.gray500]
						}
						orientation={gradientBackground.orientation}
					>
						{buttonContent}
					</GradientBackground>
				) : (
					buttonContent
				)}
			</Pressable>
		</Animated.View>
	);
}
