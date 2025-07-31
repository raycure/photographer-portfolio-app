import {
	FontAwesome,
	FontAwesome6,
	AntDesign,
	Ionicons,
	Octicons,
	Feather,
} from '@expo/vector-icons';

export const iconCollectionMap = {
	fa: FontAwesome,
	fa6: FontAwesome6,
	ad: AntDesign,
	ion: Ionicons,
	oct: Octicons,
	fe: Feather,
} as const;

export type IconCollectionKey = keyof typeof iconCollectionMap;
export type IconNameTypes =
	| React.ComponentProps<typeof FontAwesome>['name']
	| React.ComponentProps<typeof FontAwesome6>['name']
	| React.ComponentProps<typeof AntDesign>['name']
	| React.ComponentProps<typeof Octicons>['name']
	| React.ComponentProps<typeof Ionicons>['name']
	| React.ComponentProps<typeof Feather>['name'];
