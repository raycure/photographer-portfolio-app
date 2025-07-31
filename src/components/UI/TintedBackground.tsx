import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import { getColorWithOpacity } from '@/src/utils/color';
import { TintedBackgroundProps } from './UITypes';
import { TintedBackgroundStyles } from './UIStyles';

export default function TintedBackground({
	blur = { intensity: 0, tint: 'dark' },
	type = 'circular',
	color = 'black',
	opacity = 0.6,
	children,
	style,
}: TintedBackgroundProps) {
	const styles = TintedBackgroundStyles;
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
