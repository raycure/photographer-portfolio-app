import { ColorValue, StyleSheet, View } from 'react-native';
import { useColors } from '@/src/hooks/useColors';
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
const styles = StyleSheet.create({
	backgroundBar: {
		alignSelf: 'stretch',
		borderRadius: 100,
	},
	activeBar: { zIndex: 1, borderRadius: 100 },
});
