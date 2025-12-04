import { useColors } from '@/src/hooks/useColors';
import { Animated, Text, View } from 'react-native';
import { InputHighlightBarStyles } from './UIStyles';
import { useEffect, useRef, useState } from 'react';

export default function InputHighlightBar({ level }: { level: string }) {
	const colors = useColors();
	const barContent = [
		{ active: true },
		{ active: level != 'low' },
		{ active: level == 'high' },
	];
	const animatedValues = useRef(
		barContent.map(() => new Animated.Value(0))
	).current;
	useEffect(() => {
		barContent.forEach((bar, index) => {
			Animated.timing(animatedValues[index], {
				toValue: bar.active ? 1 : 0,
				duration: 300,
				useNativeDriver: false,
			}).start();
		});
	}, [level]);
	const [displayedLevel, setDisplayedLevel] = useState(level);
	const textOpacity = useRef(new Animated.Value(1)).current;
	useEffect(() => {
		if (level === displayedLevel) return;
		Animated.timing(textOpacity, {
			toValue: 0,
			duration: 150,
			useNativeDriver: true,
		}).start(() => {
			setDisplayedLevel(level);
			Animated.timing(textOpacity, {
				toValue: 1,
				duration: 150,
				useNativeDriver: true,
			}).start();
		});
	}, [level]);
	const activeColor =
		level == 'low'
			? colors.accentRed
			: level == 'medium'
			? colors.accentOrange
			: colors.accentGreen400;
	const styles = InputHighlightBarStyles;
	return (
		<View style={styles.outerContainer}>
			{barContent.map((bar, index) => {
				const animatedColor = animatedValues[index].interpolate({
					inputRange: [0, 1],
					outputRange: [colors.gray500, activeColor],
				});

				return (
					<Animated.View
						key={index}
						style={[
							styles.singularBar,
							{
								backgroundColor: animatedColor,
							},
						]}
					/>
				);
			})}
			<Animated.Text
				style={[
					styles.highlightText,
					{
						color: activeColor,
						opacity: textOpacity,
					},
				]}
			>
				{displayedLevel}
			</Animated.Text>
		</View>
	);
}
