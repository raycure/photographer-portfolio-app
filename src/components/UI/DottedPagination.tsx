import { Animated, View } from 'react-native';
import { DottedPaginationProps } from './UITypes';
import { useColors } from '@/src/hooks/useColors';
import { useEffect, useRef } from 'react';
import { DottedPaginationStyles } from './UIStyles';

export default function DottedPagination({
	length,
	activeIndex,
	color,
	size = 'medium',
	style,
}: DottedPaginationProps) {
	const colors = useColors();

	const dotSize = size === 'big' ? 8 : size === 'medium' ? 6 : 4;
	const activeWidth = size === 'big' ? 28 : size === 'medium' ? 24 : 10;
	const styles = DottedPaginationStyles;
	return (
		<View style={[styles.container, style]}>
			{Array.from({ length }).map((_, index) => (
				<AnimatedDot
					key={index}
					active={activeIndex === index}
					color={color ?? colors.tint}
					size={dotSize}
					activeWidth={activeWidth}
				/>
			))}
		</View>
	);
}

function AnimatedDot({
	active,
	color,
	size,
	activeWidth,
}: {
	active: boolean;
	color: string;
	size: number;
	activeWidth: number;
}) {
	const widthAnim = useRef(new Animated.Value(size)).current;

	useEffect(() => {
		Animated.spring(widthAnim, {
			toValue: active ? activeWidth : size,
			useNativeDriver: false,
			friction: 6,
		}).start();
	}, [active]);

	return (
		<Animated.View
			style={[
				{
					backgroundColor: color,
					width: widthAnim,
					height: size,
					borderRadius: size,
				},
			]}
		/>
	);
}
