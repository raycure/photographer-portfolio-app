import { View } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { LineSeperatorProps } from './UITypes';

export default function LineSeperator({
	style,
	color,
	fixOrientation = false,
}: LineSeperatorProps) {
	const colors = useColors();
	return (
		<View
			lightColor={colors.gray100}
			darkColor={colors.gray100}
			style={[
				!fixOrientation
					? {
							marginVertical: 8,
							height: 1,
							alignSelf: 'stretch',
					  }
					: { marginVertical: 8, width: 1, flexGrow: 1 },
				color ? { backgroundColor: color } : {},
				style,
			]}
		/>
	);
}
