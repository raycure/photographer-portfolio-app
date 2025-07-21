import { LinearGradient } from 'expo-linear-gradient';
import { ColorValue } from 'react-native';
export type gradientProps = {
	colors: [ColorValue, ColorValue];
	children?: React.ReactNode;
	orientation?: 'vertical' | 'horizontal' | 'diagonal-l' | 'diagonal-r';
};
const getGradientPoints = (orientation: gradientProps['orientation']) => {
	switch (orientation) {
		case 'horizontal':
			return { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
		case 'diagonal-l':
			return { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };
		case 'diagonal-r':
			return { start: { x: 1, y: 0 }, end: { x: 0, y: 1 } };
		case 'vertical':
		default:
			return { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };
	}
};
export default function GradientBackground({
	colors,
	orientation = 'vertical',
	children,
}: gradientProps) {
	const { start, end } = getGradientPoints(orientation);
	return (
		<LinearGradient colors={colors} start={start} end={end}>
			{children}
		</LinearGradient>
	);
}
