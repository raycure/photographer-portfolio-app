import {
	Animated,
	Dimensions,
	PanResponder,
	StyleSheet,
	View,
} from 'react-native';
import HomeCard from './HomeCard';
import SwiperButtons from './SwiperButtons';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useCallback, useRef, useState } from 'react';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { clamp } from 'react-native-reanimated';
export default function HomeSwiper() {
	const [data, setData] = useState(dummyChallengeData.entries);
	const interactionStore = useInteractionStore();
	const activeCard = data[0];
	const nextCard = data[1];
	const height = Dimensions.get('screen').height;
	const swipe = useRef(new Animated.ValueXY()).current;
	const tiltSign = useRef(new Animated.Value(1)).current;

	const removeTopCard = useCallback(
		(direction: 'left' | 'right') => {
			if (direction === 'right') {
				interactionStore.addLike(activeCard.entryId);
			} else {
				interactionStore.addDislike(activeCard.entryId);
			}
			swipe.setValue({ x: 0, y: 0 });
			setData((prev) => prev.slice(1));
		},
		[swipe, interactionStore, activeCard]
	);

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: (_, { dx, dy, y0 }) => {
				const clampedY = clamp(dy, -20, 20);
				swipe.setValue({ x: dx, y: clampedY });
				tiltSign.setValue(y0 > height * 0.45 ? 1 : -1);
			},
			onPanResponderRelease: (_, { dx, dy }) => {
				const direction = Math.sign(dx);
				const isSwipedOffScreen = Math.abs(dx) > 100;
				if (isSwipedOffScreen) {
					Animated.timing(swipe, {
						duration: 100,
						toValue: { x: direction * 600, y: dy },
						useNativeDriver: true,
					}).start(() => removeTopCard(direction > 0 ? 'right' : 'left'));
					return;
				}
				Animated.spring(swipe, {
					toValue: { x: 0, y: 0 },
					useNativeDriver: true,
					friction: 5,
				}).start();
			},
		})
	).current;

	const rotate = Animated.multiply(swipe.x, 1).interpolate({
		inputRange: [-100, 0, 100],
		outputRange: ['6deg', '0deg', '-6deg'],
	});

	const animatedCardStyle = {
		transform: [...swipe.getTranslateTransform(), { rotate }],
	};

	const handleChoice = useCallback(
		(direction: number) => {
			Animated.timing(swipe.x, {
				toValue: direction * 600,
				duration: 400,
				useNativeDriver: true,
			}).start(() => removeTopCard(direction > 0 ? 'right' : 'left'));
		},
		[removeTopCard, swipe.x]
	);

	return (
		<View style={styles.outerContainer}>
			<Animated.View
				style={[animatedCardStyle, styles.card, styles.activeCard]}
				{...panResponder.panHandlers}
			>
				<HomeCard userId={activeCard.userId} imageId={activeCard.imageId} />
			</Animated.View>
			<View style={[styles.card, styles.nextCard]}>
				<HomeCard userId={nextCard.userId} imageId={nextCard.imageId} />
			</View>
			<View style={styles.buttonsContainer}>
				<SwiperButtons onPress={() => handleChoice(-1)} likeButton={false} />
				<SwiperButtons onPress={() => handleChoice(1)} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	buttonsContainer: {
		flexDirection: 'row',
		gap: 14,
		position: 'absolute',
		bottom: 18,
		zIndex: 5,
	},
	card: { position: 'absolute' },
	activeCard: { zIndex: 2 },
	nextCard: { zIndex: 1 },
});
