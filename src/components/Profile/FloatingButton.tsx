import { Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { FloatingButtonStyles } from './ProfileStyles';
import { FloatingButtonProps } from './ProfileTypes';

export default function FloatingButton({
	onPress,
	size = 'medium',
	icon,
	style,
}: FloatingButtonProps) {
	const colors = useColors();
	const styles = FloatingButtonStyles;
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.outerContainer,
				{ backgroundColor: colors.accentBlue },
				style,
				pressed ? styles.pressed : undefined,
				size === 'big'
					? styles.big
					: size === 'medium'
					? styles.medium
					: styles.small,
			]}
		>
			<CustomIcon
				size={size === 'big' ? 36 : size === 'medium' ? 30 : 24}
				{...icon}
			/>
		</Pressable>
	);
}
