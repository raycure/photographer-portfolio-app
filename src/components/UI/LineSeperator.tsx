import { StyleProps } from 'react-native-reanimated';
import { View } from '../Themed';
import { useColors } from '@/src/hooks/useColors';

export default function LineSeperator({ style }: { style?: StyleProps }) {
	const colors = useColors();
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
			lightColor={colors.gray400}
			darkColor={colors.gray400}
		/>
	);
}
