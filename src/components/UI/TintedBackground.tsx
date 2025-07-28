import { StyleSheet, View } from 'react-native';
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
	return blur?.intensity > 0 ? (
		<BlurView
			intensity={blur?.intensity}
			experimentalBlurMethod='dimezisBlurView'
			style={[
				styles.container,
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
				styles.container,
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
	},
	rectangularContainer: {
		borderRadius: 8,
	},
	container: {
		padding: 8,
		overflow: 'hidden',
		minWidth: 40,
		minHeight: 40,
		flexShrink: 1,
	},
});
