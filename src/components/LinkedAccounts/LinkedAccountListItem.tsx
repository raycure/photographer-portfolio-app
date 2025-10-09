import { Animated, Linking, Pressable, Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { socialMediaList } from '@/src/constants/socialMediaList';
import { useColors } from '@/src/hooks/useColors';
import { LinkedAccountListItemStyles } from './LinkedAccountsStyles';
import {
	LinkedAccountListItemProps,
	ParentViewProps,
} from './LinkedAccountsTypes';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useRef } from 'react';

const styles = LinkedAccountListItemStyles;
const ParentView = ({ children, onPress, data }: ParentViewProps) => {
	if (data.isPersonal) {
		return <View style={styles.outerContainer}>{children}</View>;
	}
	return (
		<Pressable onPress={() => onPress(data.url)} style={styles.outerContainer}>
			{children}
		</Pressable>
	);
};
export default function LinkedAccountListItem({
	data,
}: LinkedAccountListItemProps) {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const animatedValue = useRef(new Animated.Value(1)).current;
	const icon = socialMediaList.find(
		(item) => item.social === data.social
	)?.icon;
	const onDeletePressed = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => {
			userInfoStore.deleteSocialAccount({ social: data.social });
		});
	};
	const animatedStyle = {
		opacity: animatedValue,
		transform: [
			{
				translateY: animatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [-10, 0],
				}),
			},
		],
	};
	const onLinkPress = async (url: string) => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			await Linking.openURL(url);
		} else {
			alert("Don't know how to open URL: " + url);
		}
	};
	return (
		<Animated.View style={[animatedStyle]}>
			<ParentView onPress={onLinkPress} data={data}>
				<CustomIcon size={40} svg={icon} />
				<Text style={[styles.text, { color: colors.tint }]}>
					@{data.username}
				</Text>
				{data.isPersonal && (
					<Pressable onPress={onDeletePressed}>
						<CustomIcon
							size={24}
							collectionKey='oct'
							name='trash'
							color={colors.accentRed}
						/>
					</Pressable>
				)}
			</ParentView>
		</Animated.View>
	);
}
