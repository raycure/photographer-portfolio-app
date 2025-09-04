import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { CustomIconProps, GenericSizes } from '../UI/UITypes';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';

export default function FloatingButton({
	onPress,
	size = 'medium',
	icon,
	style,
}: {
	onPress?: () => void;
	size?: GenericSizes;
	icon: CustomIconProps;
	style?: ViewStyle;
}) {
	const colors = useColors();
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.outerContainer,
				{ backgroundColor: colors.accentBlue },
				style,
				pressed ? styles.pressed : undefined,
			]}
		>
			<CustomIcon
				size={size === 'big' ? 40 : size === 'medium' ? 34 : 30}
				{...icon}
			/>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 300,
		backgroundColor: 'black',
		padding: 8,
	},
	pressed: { opacity: 0.7 },
});
