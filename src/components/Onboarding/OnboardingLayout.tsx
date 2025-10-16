import { Animated, StyleSheet } from 'react-native';
import { View } from '../Themed';
import { useRef } from 'react';
import OnboardingCarouselItem from './OnboardingCarouselItem';
import { onboardingConfig } from './OnboardingConfig';

export default function OnboardingLayout() {
	const scrollX = useRef(new Animated.Value(0)).current;
	return (
		<View style={styles.outerContainer}>
			<Animated.ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}
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
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	carouselContainer: {
		flex: 1,
	},
});
