import { LinearGradient } from 'expo-linear-gradient';
import { ColorValue } from 'react-native';
export type gradientProps = {
	colors: [ColorValue, ColorValue];
	children: React.ReactNode;
	orientation?: 'vertical' | 'horizontal' | 'diagonal-l' | 'diagonal-r';
};
export default function GradientBackground({
	colors,
	orientation = 'vertical',
	children,
}: gradientProps) {
	return <LinearGradient colors={colors}>{children}</LinearGradient>;
}
