import {
	FontAwesome,
	FontAwesome6,
	AntDesign,
	Ionicons,
} from '@expo/vector-icons';

export const iconCollectionMap = {
	fa: FontAwesome,
	fa6: FontAwesome6,
	ad: AntDesign,
	ion: Ionicons,
} as const;

export type IconCollectionKey = keyof typeof iconCollectionMap;
export type IconNameTypes =
	| React.ComponentProps<typeof FontAwesome>['name']
	| React.ComponentProps<typeof FontAwesome6>['name']
	| React.ComponentProps<typeof AntDesign>['name']
	| React.ComponentProps<typeof Ionicons>['name'];
