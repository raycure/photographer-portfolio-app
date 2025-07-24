import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { View } from '../Themed';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import GradientBackground from './GradientBackground';
import { CustomButtonProps } from './UITypes';
import TintedBackground from './TintedBackground';
import { StyleProps } from 'react-native-reanimated';

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
	const colorScheme = useColorScheme();
	const disabledButtonStyle: StyleProps = {
		backgroundColor: Colors[colorScheme ?? 'dark'].gray400,
	};
	const innerGeneralButtonContent = (
		<View
			style={[
				gradientBackground
					? { backgroundColor: 'transparent' }
					: backgroundColor
					? [{ backgroundColor: backgroundColor }, styles.innerContainer]
					: disabled
					? [disabledButtonStyle, styles.innerContainer]
					: [
							{ backgroundColor: Colors[colorScheme ?? 'dark'].accentBlue },
							styles.innerContainer,
					  ],
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
						color:
							active == true
								? Colors[colorScheme ?? 'dark'].tint
								: Colors[colorScheme ?? 'dark'].gray400,
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
						style={style}
					>
						{icon({
							color:
								active == true
									? Colors[colorScheme ?? 'dark'].gray400
									: Colors[colorScheme ?? 'dark'].tint,
						})}
					</TintedBackground>
				) : (
					icon({
						color:
							active == true
								? Colors[colorScheme ?? 'dark'].gray400
								: Colors[colorScheme ?? 'dark'].tint,
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
				type === 'icon'
					? styles.outerContainer
					: type === 'stretched'
					? { alignSelf: 'stretch' }
					: {},
				outerContainerStyle,
			]}
		>
			{gradientBackground ? (
				<GradientBackground
					style={
						type == 'icon'
							? styles.gradientIconContainer
							: styles.gradientContainer
					}
					colors={
						!disabled
							? gradientBackground.colors
							: [
									Colors[colorScheme ?? 'dark'].gray400,
									Colors[colorScheme ?? 'dark'].gray500,
							  ]
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
const styles = StyleSheet.create({
	outerContainer: { margin: 4 },
	innerContainer: {
		paddingInline: 30,
		paddingVertical: 12,
		borderRadius: 12,
		alignItems: 'center',
	},
	text: { fontSize: 18 },
	gradientIconContainer: {
		paddingInline: 10,
		paddingVertical: 6,
		borderRadius: 8,
		alignItems: 'center',
	},
	gradientContainer: {
		paddingInline: 30,
		paddingVertical: 12,
		borderRadius: 12,
		alignItems: 'center',
	},
});
