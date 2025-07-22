import { ColorValue } from 'react-native';

export function getColorWithOpacity(
	color: ColorValue | undefined,
	opacity: number = 1
): string {
	if (typeof color === 'string') {
		if (color.startsWith('#') && color.length === 7) {
			const r = parseInt(color.slice(1, 3), 16);
			const g = parseInt(color.slice(3, 5), 16);
			const b = parseInt(color.slice(5, 7), 16);
			return `rgba(${r}, ${g}, ${b}, ${opacity})`;
		}
		return color;
	}
	return `rgba(0,0,0,${opacity})`;
}
