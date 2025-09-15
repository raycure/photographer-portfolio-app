import { Pressable } from 'react-native';
import CustomIcon from './CustomIcon';
import { StyleProps } from 'react-native-reanimated';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import { CloseButtonStyles } from './UIStyles';

export default function CloseButton({
	onPress,
	style,
}: {
	onPress: (() => void) | null | undefined;
	style?: StyleProps;
}) {
	const [pressed, setPressed] = useState(false);
	const colors = useColors();
	const styles = CloseButtonStyles;
	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			style={[styles.outerContainer, style]}
		>
			<CustomIcon
				color={pressed ? colors.gray600 : colors.primary200}
				collectionKey='ad'
				name='close'
				size={26}
			/>
		</Pressable>
	);
}
