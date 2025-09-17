import { Social } from '@/src/constants/socialMediaList';
import { ReactNode } from 'react';
type data = {
	url: string;
	isPersonal: boolean;
	social: Social;
	username: string;
};
export type LinkedAccountListItemProps = {
	data: data;
};
export type ParentViewProps = {
	children: ReactNode;
	onPress: (url: string) => void;
	data: data;
};
