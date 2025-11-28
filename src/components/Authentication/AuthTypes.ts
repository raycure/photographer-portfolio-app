import { IconCollectionKey } from '@/src/constants/iconRegistry';
import React from 'react';
import { TextInputProps } from 'react-native';

type InputItem = {
	leftIcon: {
		collectionKey: IconCollectionKey;
		name: string;
	};
	placeholder: string;
	title: string;
	textContentType?: TextInputProps['textContentType'];
	rightElement?: ({ color }: { color: any }) => React.ReactNode;
	secureTextEntry?: boolean;
	textStyle?: {
		letterSpacing: number;
	};
	validationRegex?: RegExp; // general validation
	secMedRegex?: RegExp; // optional medium-level regex
	secHighRegex?: RegExp; // optional high-level regex
};
type FormKeys = 'name' | 'username' | 'password' | 'email';
export type FormProps = {
	elements: FormKeys[];
	type: 'register' | 'login';
};
export type AuthInputDataTypes = {
	[key in FormKeys]: InputItem;
};

export type InlineLinkTextProps = {
	type: FormProps['type'];
};
