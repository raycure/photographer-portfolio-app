import useAspectRatio from '@/src/hooks/useAspectRatio';
import {
	Animated,
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native';
export default function OnboardingCarouselItem({
	scrollX,
	index,
	item,
}: {
	scrollX: Animated.Value;
	index: number;
	item: object;
}) {
	const { width } = useWindowDimensions();
	const imageLink =
		'https://ridgefieldfriends.org/wp-content/uploads/2017/04/Columbia-White-Tail-Buck.jpg?x15533';
	const aspectRatio = useAspectRatio(imageLink);
	return (
		<View
			style={{
				backgroundColor: item.backgroundColor,
				flex: 1,
				maxWidth: width,
				padding: 52,
				paddingBottom: 120,
				justifyContent: 'center',
				alignItems: 'center',
				gap: 56,
			}}
		>
			<Image
				source={{
					uri: imageLink,
				}}
				style={{ aspectRatio: 1, width: '100%', borderRadius: 18 }}
			/>
			<View style={{ alignItems: 'center' }}>
				<Text
					style={{
						textAlign: 'center',
						color: item.textColor,
						fontSize: 34,
						fontWeight: '700',
					}}
				>
					{item.title}
				</Text>
				<Text
					style={{ textAlign: 'center', fontSize: 18, color: item.textColor }}
				>
					{item.content}
				</Text>
			</View>
		</View>
	);
}
