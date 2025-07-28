import { useColors } from '@/src/hooks/useColors';
import { StyleSheet, Text, View } from 'react-native';

export default function InputHighlightBar({ level }: { level: string }) {
	const colors = useColors();
	const barContent = [
		{
			active: true,
		},
		{
			active: level != 'low',
		},
		{
			active: level == 'high',
		},
	];
	const activeColor =
		level == 'low'
			? colors.accentRed
			: level == 'medium'
			? colors.accentOrange
			: colors.accentGreen400;
	return (
		<View style={styles.outerContainer}>
			{barContent.map((bar, index) => (
				<View
					key={index}
					style={[
						styles.singularBar,
						{
							backgroundColor: bar.active ? activeColor : colors.gray500,
						},
					]}
				/>
			))}
			<Text style={[styles.highlightText, { color: activeColor }]}>
				{level}
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: 8,
		top: -8,
	},
	singularBar: {
		width: '25%',
		height: 6,
		backgroundColor: 'white',
		borderRadius: 6,
	},
	highlightText: { textAlign: 'center', margin: 'auto', fontWeight: 'bold' },
});
