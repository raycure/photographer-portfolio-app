import { iconCollectionMap } from '@/src/constants/iconRegistry';
import { CustomIconProps } from './UITypes';
import { View } from 'react-native';

export default function CustomIcon(props: CustomIconProps) {
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
			color = 'white',
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
