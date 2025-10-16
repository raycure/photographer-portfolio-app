import { Animated } from 'react-native';

export type OnboardingConfig = {
	icons: string[];
	title: string;
	content: string;
	backgroundColor: string;
	buttonColor: string;
	textColor: string;
};
export type OnboardingCarouselItemProps = {
	scrollX: Animated.Value;
	index: number;
	item: OnboardingConfig;
};
