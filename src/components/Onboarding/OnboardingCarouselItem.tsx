import {
	Animated,
	Image,
	Text,
	useWindowDimensions,
	View,
	ViewStyle,
} from 'react-native';
import { OnboardingCarouselItemProps } from './OnboardingTypes';
import { OnboardingCarouselItemStyles } from './OnboardingStyles';
export default function OnboardingCarouselItem({
	scrollX,
	index,
	item,
}: OnboardingCarouselItemProps) {
	const { width } = useWindowDimensions();
	const imageLink =
		'https://ridgefieldfriends.org/wp-content/uploads/2017/04/Columbia-White-Tail-Buck.jpg?x15533';
	const translateX = scrollX.interpolate({
		inputRange: [width * (index - 1), width * index, width * (index + 1)],
		outputRange: [width * 0.4, 0, -width * 0.4],
	});
	const icons: { style: ViewStyle; mode: number; icon: any }[] = [
		{ style: { top: 34 }, mode: 1, icon: item.icons[0] },
		{ style: { top: '48%' }, mode: 0, icon: item.icons[1] },
		{ style: { bottom: 34 }, mode: 1, icon: item.icons[2] },
	];
	const styles = OnboardingCarouselItemStyles;
	return (
		<View style={[styles.outerContainer]}>
			<View>
				<Image
					source={{ uri: imageLink }}
					style={styles.image}
					resizeMode='cover'
				/>
				{icons.map((e, i) => (
					<Animated.View
						key={i}
						style={[
							{
								transform: [{ translateX: translateX }],
							},
							styles.messageContainer,
							e.style,
							index % 2 === e.mode
								? styles.messageContainerLeft
								: styles.messageContainerRight,
						]}
					>
						<Text style={{ fontSize: 28 }}>{e.icon}</Text>
					</Animated.View>
				))}
			</View>
			<View style={styles.innerContainer}>
				<Text style={[{ color: item.textColor }, styles.title]}>
					{item.title}
				</Text>
				<Text style={[{ color: item.textColor }, styles.text]}>
					{item.content}
				</Text>
			</View>
		</View>
	);
}
