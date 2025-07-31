import { Pressable, Text } from 'react-native';
import { View } from '../Themed';
import { useState } from 'react';
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
	const disabledButtonStyle: StyleProps = {
		backgroundColor: colors.gray400,
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
					: [{ backgroundColor: colors.accentBlue }, styles.innerContainer],
				style,
			]}
		>
			{content && (
				<Text style={[styles.text, { color: textColor }, textStyle]}>
					{content}
				</Text>
			)}
			{icon && (
				<View style={{ backgroundColor: 'transparent', marginRight: 6 }}>
					{icon({
						color: active == true ? colors.tint : colors.gray400,
					})}
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
						{icon({
							color: active == true ? colors.gray300 : colors.tint,
						})}
					</TintedBackground>
				) : (
					icon({
						color: active == true ? colors.gray300 : colors.tint,
					})
				)
			) : null}
		</View>
	);
	const buttonContent =
		type == 'icon' ? innerIconButtonContent : innerGeneralButtonContent;

	return (
		<Pressable
			onPress={!disabled ? onPress : () => {}}
			onPressIn={() => setActive(true)}
			onPressOut={() => setActive(false)}
			style={[
				type === 'stretched' ? { alignSelf: 'stretch' } : {},
				outerContainerStyle,
			]}
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
	);
}
