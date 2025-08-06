import { View } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { LineSeperatorProps } from './UITypes';
import { LineSeperatorStyles } from './UIStyles';

export default function LineSeperator({
	style,
	color,
	fixOrientation = false,
}: LineSeperatorProps) {
	const colors = useColors();
	const styles = LineSeperatorStyles;
	return (
		<View
			lightColor={colors.gray100}
			darkColor={colors.gray100}
			style={[
				!fixOrientation ? styles.mainOrientation : styles.turnedOrientation,
				color ? { backgroundColor: color } : undefined,
				style,
			]}
		/>
	);
}
