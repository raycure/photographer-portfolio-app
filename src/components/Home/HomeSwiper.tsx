import { Animated, Dimensions, PanResponder, View } from 'react-native';
import HomeCard from './HomeCard';
import SwiperButtons from './SwiperButtons';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { clamp } from 'react-native-reanimated';
import { HomeSwiperStyles } from './HomeStyles';
import NoEntries from './NoEntries';
import { useLocalSearchParams } from 'expo-router';
import { YouveSeenEverything } from '../Modal/modals';
import { Entry } from '@/src/constants/dataTypes';
export default function HomeSwiper({ entries }: { entries: Entry[] }) {
	const { entryId } = useLocalSearchParams();
	const [data, setData] = useState(entries);
	useEffect(() => {
		if (!entryId) return;
		setData((prev) => {
			if (prev.length === 0) {
				const entry = dummyChallengeData.entries.find(
					(e) => e.entryId === entryId
				);
				return entry ? [entry] : prev;
			}
			const existing = [...prev];
			const foundIndex = existing.findIndex((e) => e.entryId === entryId);
			if (foundIndex > -1) {
				const [entry] = existing.splice(foundIndex, 1);
				return [entry, ...existing];
			}
			const entry = dummyChallengeData.entries.find(
				(e) => e.entryId === entryId
			);
			return entry ? [entry, ...existing] : prev;
		});
	}, [entryId]);
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
			setData((prev) => prev.slice(1));
			setTimeout(() => {
				swipe.setValue({ x: 0, y: 0 });
			}, 0);
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
		outputRange: ['-6deg', '0deg', '6deg'],
	});

	const animatedCardStyle = {
		transform: [...swipe.getTranslateTransform(), { rotate }],
	};
	const nextCardScale = swipe.x.interpolate({
		inputRange: [-300, 0, 300],
		outputRange: [1, 0.9, 1],
		extrapolate: 'clamp',
	});
	const nextCardOpacity = swipe.x.interpolate({
		inputRange: [-150, 0, 150],
		outputRange: [1, 0.7, 1],
		extrapolate: 'clamp',
	});
	const animatedNextCardStyle = {
		transform: [{ scale: nextCardScale }],
		opacity: nextCardOpacity,
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
	const styles = HomeSwiperStyles;
	useEffect(() => {
		if (!activeCard) {
			YouveSeenEverything();
		}
	}, [activeCard]);

	if (!activeCard) {
		return <NoEntries />;
	}
	return (
		<View style={styles.outerContainer}>
			<Animated.View
				style={[animatedCardStyle, styles.card, styles.activeCard]}
				{...panResponder.panHandlers}
			>
				<HomeCard userId={activeCard.userId} imageId={activeCard.imageId} />
			</Animated.View>
			{nextCard && (
				<Animated.View
					style={[styles.card, styles.nextCard, animatedNextCardStyle]}
				>
					<HomeCard userId={nextCard.userId} imageId={nextCard.imageId} />
				</Animated.View>
			)}
			<View style={styles.buttonsContainer}>
				<SwiperButtons
					onPress={() => handleChoice(-1)}
					likeButton={false}
					swipeX={swipe.x}
				/>
				<SwiperButtons onPress={() => handleChoice(1)} swipeX={swipe.x} />
			</View>
		</View>
	);
}
