import { StyleProps } from 'react-native-reanimated';
import { View } from '../Themed';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from 'react-native';

export default function LineSeperator({ style }: { style?: StyleProps }) {
	const colorScheme = useColorScheme();
	return (
		<View
			style={[
				{
					marginVertical: 8,
					height: 1,
					flexGrow: 1,
				},
				style,
			]}
			lightColor={Colors[colorScheme ?? 'dark'].gray400}
			darkColor={Colors[colorScheme ?? 'dark'].gray400}
		/>
	);
}
