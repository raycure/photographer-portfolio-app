import { useColors } from '@/src/hooks/useColors';
import { Text, View } from 'react-native';
import { InputHighlightBarStyles } from './UIStyles';

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
	const styles = InputHighlightBarStyles;
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
