import {
	ColorValue,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	useColorScheme,
	ViewStyle,
} from 'react-native';
import { View } from '../Themed';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground, { gradientProps } from './GradientBackground';
type CustomButtonProps = {
	content?: string;
	icon?: (props: { color: string }) => React.ReactNode;
	type: 'text' | 'icon';
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
	backgroundColor?: ColorValue;
	gradientBackground?: gradientProps;
	style?: ViewStyle;
};

export default function CustomButton({
	content,
	icon,
	type = 'text',
	onPress,
	backgroundColor,
	gradientBackground,
	style,
}: CustomButtonProps) {
	const [active, setActive] = useState<'pressed' | 'hover' | 'inactive'>(
		'pressed'
	);
	const colorScheme = useColorScheme();
	const innerGeneralButtonContent = (
		<View style={[styles.innerContainer, style]}>
			{content && <Text style={styles.text}>{content}</Text>}
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
		<View
			style={
				gradientBackground
					? { backgroundColor: 'transparent' }
					: styles.iconButtonContainer
			}
		>
			{icon &&
				icon({
					color:
						active != 'inactive'
							? Colors[colorScheme ?? 'dark'].tint
							: Colors[colorScheme ?? 'dark'].gray400,
				})}
		</View>
	);
	const buttonContent =
		type != 'icon' ? innerGeneralButtonContent : innerIconButtonContent;
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
