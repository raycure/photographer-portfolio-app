import { iconCollectionMap } from '@/src/constants/iconRegistry';
import { CustomIconProps } from './UITypes';
import { View } from 'react-native';
import { useColors } from '@/src/hooks/useColors';

export default function CustomIcon(props: CustomIconProps) {
	const colors = useColors();
	if ('svg' in props) {
		const { svg, style, size } = props;
		return (
			<View
				style={[
					{ justifyContent: 'center', alignItems: 'center' },
					size ? { width: size, height: size } : {},
					style,
				]}
			>
				{svg}
			</View>
		);
	} else {
		const {
			name,
			color = colors.tint,
			style,
			size = 28,
			collectionKey,
			...rest
		} = props;

		const Icon = iconCollectionMap[collectionKey];
		return (
			<Icon
				name={name as never}
				color={color}
				size={size}
				style={[style]}
				{...rest}
			/>
		);
	}
}
