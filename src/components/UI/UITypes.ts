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
import { StyleProps } from 'react-native-reanimated';

type CommonButtonBase = {
	onPress?: (...args: any[]) => any | (() => void) | null | undefined;
	icon?: ((props: { color: string }) => React.ReactNode) | React.ReactNode;
	backgroundColor?: ColorValue;
	style?: ViewStyle;
	outerContainerStyle?: ViewStyle;
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

export type InputAreaProps = {
	inputType?: 'number' | 'string';
	placeholder?: string;
	title?: string;
	secure?: boolean;
	leftElement?: (props: { color: string }) => React.ReactNode;
	rightElement?: (props: { color: string }) => React.ReactNode;
	containerStyle?: ViewStyle;
	textStyle?: TextStyle;
	textContentType?: TextInputProps['textContentType'];
	onChange?:
		| ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
		| undefined;
} & TextInputProps;

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
	style?: StyleProps;
	color?: ColorValue;
	fixOrientation?: boolean;
};

export type SubtitleTitlePairProps = {
	title: string;
	subtitle: string;
	size?: 'big' | 'medium' | 'small';
	titleStyle?: TextStyle;
	subtitleStyle?: TextStyle;
};
