import { ColorValue, StyleSheet, View } from 'react-native';
import { useColors } from '@/src/hooks/useColors';
import { FillingBarStyles } from './UIStyles';
type FillingBarProps = {
	percentage: number;
	backgroundColor?: ColorValue;
	color?: ColorValue;
	thickness?: number;
};
export default function FillingBar({
	percentage,
	backgroundColor,
	color,
	thickness = 10,
}: FillingBarProps) {
	const colors = useColors();
	const styles = FillingBarStyles;
	return (
		<View
			style={[
				backgroundColor ? {} : { backgroundColor: colors.primary800 },
				{ height: thickness },
				styles.backgroundBar,
			]}
		>
			<View
				style={[
					styles.activeBar,
					{ width: `${percentage * 100}%`, height: thickness },
					color
						? { backgroundColor: color }
						: { backgroundColor: colors.accentYellow },
				]}
			/>
		</View>
	);
}
