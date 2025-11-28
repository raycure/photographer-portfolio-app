import {
	ColorValue,
	NativeSyntheticEvent,
	StyleProp,
	TextInputChangeEventData,
	TextInputProps,
	TextStyle,
	ViewStyle,
} from 'react-native';
import { IconCollectionKey, IconNameTypes } from '@/src/constants/iconRegistry';
import { UserID } from '@/src/stores/StoreTypes';
import { ReactNode } from 'react';
export type GenericSizes = 'big' | 'medium' | 'small';
export type ExtraSizes = 'xl' | 'xs';
type CommonButtonBase = {
	onPress?: (...args: any[]) => any | (() => void) | null | undefined;
	icon?: ((props: { color: string }) => React.ReactNode) | React.ReactNode;
	backgroundColor?: ColorValue;
	style?: ViewStyle;
	outerContainerStyle?: ViewStyle | ViewStyle[];
	textStyle?: TextStyle;
	disabled?: boolean;
};
type GradientButton = {
	gradientBackground: GradientProps;
	tintedBackground?: never;
};
type TintedButton = {
	gradientBackground?: never;
	tintedBackground: TintedBackgroundProps;
};
type NotSpecialButton = {
	gradientBackground?: never;
	tintedBackground?: never;
};
type IconButtonProps = {
	type: 'icon';
	icon: ((props: { color: string }) => React.ReactNode) | React.ReactNode;
	content?: never;
	textColor?: never;
} & CommonButtonBase &
	(GradientButton | TintedButton | NotSpecialButton);
type TextButtonProps = {
	type: 'general' | 'stretched';
	content?: string;
	textColor?: ColorValue;
} & CommonButtonBase &
	(GradientButton | TintedButton | NotSpecialButton);
export type CustomButtonProps = IconButtonProps | TextButtonProps;

type SVGIconProps = {
	svg: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	size?: number;
};

export type RegistredIconProps = {
	name: IconNameTypes;
	color?: string;
	style?: StyleProp<ViewStyle>;
	size?: number;
	collectionKey: IconCollectionKey;
};

export type CustomIconProps = SVGIconProps | RegistredIconProps;

export type GradientProps = {
	colors: [ColorValue, ColorValue];
	children?: React.ReactNode;
	orientation?: 'vertical' | 'horizontal' | 'diagonal-l' | 'diagonal-r';
	style?: StyleProp<ViewStyle>;
};

export type InputAreaProps<K extends string = string> = {
	inputType?: 'number' | 'string';
	placeholder?: string;
	title?: string;
	secure?: boolean;
	leftElement?: (props: { color: string }) => React.ReactNode;
	rightElement?: (props: { color: string }) => React.ReactNode;
	containerStyle?: ViewStyle;
	textStyle?: TextStyle;
	textContentType?: TextInputProps['textContentType'];
	letterCount?: number;
	maxLength?: number;
	onChange?:
		| ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
		| undefined;
	validationRegex?: RegExp;
	fieldKey?: K;
	ruleFollowed?: Record<K, boolean | null>;
	setRuleFollowed?: React.Dispatch<
		React.SetStateAction<Record<K, boolean | null>>
	>;
} & TextInputProps;

export type FollowersButtonProps = {
	size?: GenericSizes;
	userId?: UserID;
};
type BaseTintedBackgroundProps = {
	type?: 'circular' | 'rectangular';
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
};
type WithBlur = {
	blur: { intensity: number; tint?: 'dark' | 'light' };
	opacity?: never;
	color?: never;
};
type WithOpacity = {
	opacity?: number;
	blur?: never;
	color?: ColorValue;
};
export type TintedBackgroundProps = BaseTintedBackgroundProps &
	(WithBlur | WithOpacity);

export type LineSeperatorProps = {
	style?: ViewStyle;
	color?: ColorValue;
	fixOrientation?: boolean;
};

export type SubtitleTitlePairProps = {
	title: string;
	subtitle: string;
	size?: GenericSizes;
	titleStyle?: TextStyle;
	subtitleStyle?: TextStyle;
};
export type PhotoSize = GenericSizes | ExtraSizes | undefined;
export type CircularPhotoProps = {
	size?: PhotoSize;
	source?: string;
	customSize?: number;
	followActive?: boolean;
	userId: UserID;
};
export type InputAreaParentProps = {
	children: ReactNode;
	title: string;
	style?: ViewStyle;
};

export type FollowButtonProps = {
	circular?: boolean;
	userId: UserID;
	size?: PhotoSize;
};

export type DottedPaginationProps = {
	length: number;
	activeIndex: number;
	color?: string;
	size?: GenericSizes;
	style?: ViewStyle;
};

export type NumberedPaginationProps = {
	activeIndex: number;
	setPaginationNumber: React.Dispatch<React.SetStateAction<number>>;
	length: number;
	color?: ColorValue;
	activeColor?: ColorValue;
	size?: GenericSizes;
};
