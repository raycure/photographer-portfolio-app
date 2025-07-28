import { Pressable } from 'react-native';
import CustomIcon from './CustomIcon';
import { StyleProps } from 'react-native-reanimated';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';

export default function CloseButton({
	onPress,
	style,
}: {
	onPress: (() => void) | null | undefined;
	style?: StyleProps;
}) {
	const [pressed, setPressed] = useState(false);
	const colors = useColors();
	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			style={[{ position: 'absolute', left: 20, top: 20 }, style]}
		>
			<CustomIcon
				color={pressed ? colors.gray400 : colors.primary200}
				collectionKey='ad'
				name='close'
				size={26}
			/>
		</Pressable>
	);
}
