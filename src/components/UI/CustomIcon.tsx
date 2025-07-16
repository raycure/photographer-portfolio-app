import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name'];
type FontAwesome6IconName = ComponentProps<typeof FontAwesome6>['name'];
type AntDesignIconName = ComponentProps<typeof AntDesign>['name'];
type IoniconsIconName = ComponentProps<typeof Ionicons>['name'];

type CustomIconProps = {
	name:
		| FontAwesomeIconName
		| AntDesignIconName
		| FontAwesome6IconName
		| IoniconsIconName;
	color?: string;
	style?: object;
	size?: number;
	active?: boolean;
	collectionName:
		| typeof FontAwesome
		| typeof AntDesign
		| typeof FontAwesome6
		| typeof Ionicons;
};

export default function CustomIcon({
	name,
	color = 'white',
	collectionName: Icon,
	style,
	size = 28,
	active = false,
	...props
}: CustomIconProps) {
	return (
		<Icon
			name={name}
			color={color}
			size={size}
			style={[{ marginBottom: -3 }, style]}
			{...props}
		/>
	);
}
