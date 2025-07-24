import { Pressable, useColorScheme } from 'react-native';
import CustomIcon from './CustomIcon';
import { StyleProps } from 'react-native-reanimated';
import { useState } from 'react';
import Colors from '@/src/constants/Colors';

export default function CloseButton({
	onPress,
	style,
}: {
	onPress: (() => void) | null | undefined;
	style?: StyleProps;
}) {
	const [pressed, setPressed] = useState(false);
	const colorScheme = useColorScheme();
	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			style={[{ position: 'absolute', left: 16, top: 16 }, style]}
		>
			<CustomIcon
				color={
					pressed
						? Colors[colorScheme ?? 'dark'].gray300
						: Colors[colorScheme ?? 'dark'].tint
				}
				collectionKey='ad'
				name='close'
			/>
		</Pressable>
	);
}
