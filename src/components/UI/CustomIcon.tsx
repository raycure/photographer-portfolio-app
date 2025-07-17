import {
	IconCollectionKey,
	iconCollectionMap,
	IconNameTypes,
} from '@/src/constants/iconRegistry';
import { ViewStyle } from 'react-native';

type IconComponentType = (typeof iconCollectionMap)[IconCollectionKey];

type CustomIconProps = {
	name: IconNameTypes;
	color?: string;
	style?: ViewStyle;
	size?: number;
	active?: boolean;
	collectionKey: IconCollectionKey;
};

export default function CustomIcon({
	name,
	color = 'white',
	collectionKey,
	style,
	size = 28,
	active = false,
	...props
}: CustomIconProps) {
	const Icon = iconCollectionMap[collectionKey];
	return (
		<Icon
			name={name as never}
			color={color}
			size={size}
			style={[{ marginBottom: -3 }, style]}
			{...props}
		/>
	);
}
