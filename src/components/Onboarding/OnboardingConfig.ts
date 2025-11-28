import { useTranslation } from 'react-i18next';
import { OnboardingConfig } from './OnboardingTypes';

export const onboardingConfig: () => OnboardingConfig[] = () => {
	const { t } = useTranslation();
	const titles = t('Onboarding.titles', {
		returnObjects: true,
	}) as string[];
	const contents = t('Onboarding.contents', {
		returnObjects: true,
	}) as string[];
	return [
		{
			icons: ['📸', '🏆', '✨'],
			title: titles[0],
			content: contents[0],
			backgroundColor: '#d24d4dff',
			buttonColor: '#992929ff',
			textColor: '#ffffffff',
		},
		{
			icons: ['🎯', '🖼️', '💬'],
			title: titles[1],
			content: contents[1],
			backgroundColor: '#95cb64ff',
			buttonColor: '#54812bff',
			textColor: '#052905ff',
		},
		{
			icons: ['🎉', '💎', '🔥'],
			title: titles[2],
			content: contents[2],
			backgroundColor: '#8cc2daff',
			buttonColor: '#1c5067ff',
			textColor: '#032235ff',
		},
		{
			icons: ['🕒', '📺', '🎯'],
			title: titles[3],
			content: contents[3],
			backgroundColor: '#cb4fa2ff',
			buttonColor: '#66154bff',
			textColor: '#ffdff7ff',
		},
		{
			icons: ['🔓', '✨', '⚡'],
			title: titles[4],
			content: contents[4],
			backgroundColor: '#866cc8ff',
			buttonColor: '#331a74ff',
			textColor: '#ffffffff',
		},
	];
};
