import { Animated, StyleSheet, View } from 'react-native';
import HomeCard from './HomeCard';
import SwiperButtons from './SwiperButtons';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useState } from 'react';
import { useInteractionStore } from '@/src/stores/InteractionStore';
export default function HomeSwiper() {
	const [data, setData] = useState(dummyChallengeData.entries);
	const interactionStore = useInteractionStore();
	const activeCard = data[0];
	const nextCard = data[1];
	const onLikePress = () => {
		interactionStore.addLike(activeCard.entryId);
		setData(data.slice(1));
	};
	const onDislikePress = () => {
		interactionStore.addDislike(activeCard.entryId);
		setData(data.slice(1));
	};
	return (
		<View style={styles.outerContainer}>
			<Animated.View style={[styles.card, styles.activeCard]}>
				<HomeCard userId={activeCard.userId} imageId={activeCard.imageId} />
			</Animated.View>
			<Animated.View style={[styles.card, styles.nextCard]}>
				<HomeCard userId={nextCard.userId} imageId={nextCard.imageId} />
			</Animated.View>
			<View style={styles.buttonsContainer}>
				<SwiperButtons onPress={onDislikePress} likeButton={false} />
				<SwiperButtons onPress={onLikePress} />
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
