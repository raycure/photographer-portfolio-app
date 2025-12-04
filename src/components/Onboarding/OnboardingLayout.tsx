import {
	Animated,
	Dimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
} from 'react-native';
import { useRef, useState } from 'react';
import OnboardingCarouselItem from './OnboardingCarouselItem';
import { onboardingConfig } from './OnboardingConfig';
import DottedPagination from '../UI/DottedPagination';
import CustomButton from '../UI/CustomButton';
import { Link, useRouter } from 'expo-router';
import { OnboardingLayoutStyles } from './OnboardingStyles';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { useTranslation } from 'react-i18next';
const width = Dimensions.get('screen').width;
export default function OnboardingLayout() {
	const { t } = useTranslation();
	const OnboardingConfig = onboardingConfig();
	const scrollX = useRef(new Animated.Value(0)).current;
	const scrollRef = useRef<any>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const router = useRouter();
	const interactionStore = useInteractionStore();
	const handleScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { x: scrollX } } }],
		{
			useNativeDriver: false,
			listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
				const offsetX = event.nativeEvent.contentOffset.x;
				const index = Math.round(offsetX / width);
				setActiveIndex(index);
			},
		}
	);
	const backgroundColor = scrollX.interpolate({
		inputRange: OnboardingConfig.map((_, i) => i * width),
		outputRange: OnboardingConfig.map((item) => item.backgroundColor),
		extrapolate: 'clamp',
	});
	const setSeen = () => {
		interactionStore.setModalSeen('onboarding');
	};
	const onRegisterPress = () => {
		setSeen();
		router.replace('/(secure)');
	};
	const onNextPress = () => {
		if (activeIndex < OnboardingConfig.length - 1) {
			scrollRef.current?.scrollTo({
				x: (activeIndex + 1) * width,
				animated: true,
			});
		}
	};
	const styles = OnboardingLayoutStyles;
	return (
		<Animated.View style={[styles.outerContainer, { backgroundColor }]}>
			<Animated.ScrollView
				ref={scrollRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={handleScroll}
				style={styles.carouselContainer}
			>
				{OnboardingConfig.map((item, index) => (
					<OnboardingCarouselItem
						key={index}
						index={index}
						scrollX={scrollX}
						item={item}
					/>
				))}
			</Animated.ScrollView>
			<DottedPagination
				style={styles.pagination}
				length={5}
				activeIndex={activeIndex}
			/>
			<CustomButton
				type='stretched'
				outerContainerStyle={styles.button}
				content={
					activeIndex === 4 ? t('UI.Buttons.Register') : t('UI.Buttons.Next')
				}
				onPress={activeIndex === 4 ? onRegisterPress : onNextPress}
				backgroundColor={OnboardingConfig[activeIndex].buttonColor}
			/>
			{activeIndex === 4 && (
				<Link onPress={setSeen} style={styles.link} href={'/(secure)/login'}>
					{t('UI.Buttons.Login')}
				</Link>
			)}
		</Animated.View>
	);
}
