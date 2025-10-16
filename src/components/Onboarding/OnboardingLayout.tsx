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
const width = Dimensions.get('screen').width;
export default function OnboardingLayout() {
	const scrollX = useRef(new Animated.Value(0)).current;
	const [activeIndex, setActiveIndex] = useState(0);
	const router = useRouter();
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
		inputRange: onboardingConfig.map((_, i) => i * width),
		outputRange: onboardingConfig.map((item) => item.backgroundColor),
		extrapolate: 'clamp',
	});
	const onRegisterPress = () => {
		router.navigate('/(secure)');
	};
	const styles = OnboardingLayoutStyles;
	return (
		<Animated.View style={[styles.outerContainer, { backgroundColor }]}>
			<Animated.ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={handleScroll}
				style={styles.carouselContainer}
			>
				{onboardingConfig.map((item, index) => (
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
			<Link style={styles.link} href={'/(secure)/login'}>
				Login
			</Link>
			<CustomButton
				type='stretched'
				outerContainerStyle={styles.button}
				content='Register'
				onPress={onRegisterPress}
				backgroundColor={onboardingConfig[activeIndex].buttonColor}
			/>
		</Animated.View>
	);
}
