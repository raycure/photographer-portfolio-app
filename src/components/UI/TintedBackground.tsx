import Colors from '@/src/constants/Colors';
import { ReactNode } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import { useColorScheme } from '../useColorScheme.web';

export type TintedBackgroundProps = {
	blurredShadow?: boolean;
	type?: 'circular' | 'rectangular';
	children?: ReactNode;
	color?: ColorValue;
	opacity?: number;
};
export default function TintedBackground({
	blurredShadow = false,
	type = 'circular',
	color = 'black',
	opacity = 0.6,
	children,
}: TintedBackgroundProps) {
	const colorScheme = useColorScheme();
	return (
		<View
			style={[
				{ backgroundColor: color, opacity: opacity },
				type == 'circular'
					? styles.circularContainer
					: styles.rectangularContainer,
				blurredShadow && styles.blurredShadow,
			]}
		>
			{children}
		</View>
	);
}
const styles = StyleSheet.create({
	circularContainer: {},
	rectangularContainer: {},
	blurredShadow: {},
});
