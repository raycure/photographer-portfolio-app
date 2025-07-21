import {
	ColorValue,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	useColorScheme,
	ViewStyle,
} from 'react-native';
import { View } from '../Themed';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import GradientBackground, { gradientProps } from './GradientBackground';
import TintedBackground, { TintedBackgroundProps } from './TintedBackground';
type IconButtonProps = {
	type: 'icon';
	icon: (props: { color: string }) => React.ReactNode;
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
	backgroundColor?: ColorValue;
	gradientBackground?: gradientProps;
	style?: ViewStyle;
	textStyle?: TextStyle;
	tintedBackground?: TintedBackgroundProps;
	content?: never; // no content for icon type
};

type TextButtonProps = {
	type: 'text';
	icon?: (props: { color: string }) => React.ReactNode;
	content?: string;
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
	backgroundColor?: ColorValue;
	gradientBackground?: gradientProps;
	style?: ViewStyle;
	textStyle?: TextStyle;
	tintedBackground?: TintedBackgroundProps;
};
type CustomButtonProps = IconButtonProps | TextButtonProps;
export default function CustomButton({
	content,
	icon,
	type = 'text',
	onPress,
	backgroundColor = 'white',
	gradientBackground,
	style,
	textStyle,
	tintedBackground,
}: CustomButtonProps) {
	const [active, setActive] = useState<'pressed' | 'hover' | 'inactive'>(
		'pressed'
	);
	const colorScheme = useColorScheme();
	const innerGeneralButtonContent = (
		<View style={[styles.innerContainer, style]}>
			{content && <Text style={[styles.text, textStyle]}>{content}</Text>}
			{icon && (
				<View style={{ backgroundColor: 'transparent', marginRight: 6 }}>
					{icon({
						color:
							active != 'inactive'
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
						color={tintedBackground?.color}
						opacity={tintedBackground?.opacity}
						type={tintedBackground?.type}
						blurredShadow={tintedBackground?.blurredShadow}
					>
						{icon({
							color:
								active != 'inactive'
									? Colors[colorScheme ?? 'dark'].tint
									: Colors[colorScheme ?? 'dark'].gray400,
						})}
					</TintedBackground>
				) : (
					icon({
						color:
							active != 'inactive'
								? Colors[colorScheme ?? 'dark'].tint
								: Colors[colorScheme ?? 'dark'].gray400,
					})
				)
			) : null}
		</View>
	);
	const buttonContent =
		type == 'icon' ? innerIconButtonContent : innerGeneralButtonContent;
	return (
		<Pressable
			onPress={onPress}
			onHoverIn={() => setActive('hover')}
			onHoverOut={() => setActive('inactive')}
			onPressIn={() => setActive('pressed')}
			onPressOut={() => setActive('inactive')}
			style={[styles.outerContainer, { backgroundColor: backgroundColor }]}
		>
			{gradientBackground ? (
				<GradientBackground colors={gradientBackground.colors}>
					{buttonContent}
				</GradientBackground>
			) : (
				buttonContent
			)}
		</Pressable>
	);
}
const styles = StyleSheet.create({
	outerContainer: {},
	innerContainer: {},
	iconButtonContainer: {},
	text: {},
});
