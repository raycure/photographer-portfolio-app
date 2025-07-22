import { LinearGradient } from 'expo-linear-gradient';
import { GradientProps } from './UITypes';

const getGradientPoints = (orientation: GradientProps['orientation']) => {
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
	style,
	children,
}: GradientProps) {
	const { start, end } = getGradientPoints(orientation);
	return (
		<LinearGradient style={style} colors={colors} start={start} end={end}>
			{children}
		</LinearGradient>
	);
}
