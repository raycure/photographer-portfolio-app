import { iconCollectionMap } from '@/src/constants/iconRegistry';
import { CustomIconProps } from './UITypes';

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
			style={[style]}
			{...props}
		/>
	);
}
