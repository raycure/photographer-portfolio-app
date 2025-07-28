import { StyleSheet, View } from 'react-native';
import { useColorScheme } from '../useColorScheme.web';
import { BlurView } from 'expo-blur';
import { getColorWithOpacity } from '@/src/utils/color';
import { TintedBackgroundProps } from './UITypes';

export default function TintedBackground({
	blur = { intensity: 0, tint: 'dark' },
	type = 'circular',
	color = 'black',
	opacity = 0.6,
	children,
	style,
}: TintedBackgroundProps) {
	const colorScheme = useColorScheme();
	return blur?.intensity > 0 ? (
		<BlurView
			intensity={blur?.intensity}
			experimentalBlurMethod='dimezisBlurView'
			style={[
				type == 'circular'
					? styles.circularContainer
					: styles.rectangularContainer,
				style,
			]}
		>
			{children}
		</BlurView>
	) : (
		<View
			style={[
				{ backgroundColor: getColorWithOpacity(color, opacity) },
				type == 'circular'
					? styles.circularContainer
					: styles.rectangularContainer,
				style,
			]}
		>
			{children}
		</View>
	);
}
const styles = StyleSheet.create({
	circularContainer: {
		borderRadius: 100,
		padding: 8,
		overflow: 'hidden',
	},
	rectangularContainer: { borderRadius: 8, padding: 8, overflow: 'hidden' },
});
