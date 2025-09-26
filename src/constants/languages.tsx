import { JSX } from 'react';
import { TurkeySVG, UnitedKingdomSVG } from './svgs';
export type LanguageKeys = 'tr' | 'en';

export type Language = {
	language: LanguageKeys;
	title: string;
	icon: JSX.Element;
};

export const languages: Language[] = [
	{
		language: 'tr',
		title: 'Türkçe',
		icon: <TurkeySVG width={36} height={36} />,
	},
	{
		language: 'en',
		title: 'English',
		icon: <UnitedKingdomSVG width={36} height={36} />,
	},
];
