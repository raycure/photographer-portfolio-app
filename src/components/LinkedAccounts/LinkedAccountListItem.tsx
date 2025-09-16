import { Linking, Pressable, Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { socialMediaList } from '@/src/constants/socialMediaList';
import { useColors } from '@/src/hooks/useColors';
import { LinkedAccountListItemStyles } from './LinkedAccountsStyles';
import { LinkedAccountListItemProps } from './LinkedAccountsTypes';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

export default function LinkedAccountListItem({
	data,
}: LinkedAccountListItemProps) {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const icon = socialMediaList.find(
		(item) => item.social === data.social
	)?.icon;
	const onDeletePressed = () => {
		userInfoStore.deleteSocialAccount({ social: data.social });
	};
	const styles = LinkedAccountListItemStyles;
	const innerContent = (
		<>
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
		</>
	);
	const onLinkPress = async (url: string) => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			await Linking.openURL(url);
		} else {
			alert("Don't know how to open URL: " + url);
		}
	};

	return data.isPersonal ? (
		<View style={styles.outerContainer}>{innerContent}</View>
	) : (
		<Pressable
			onPress={() => onLinkPress(data.url)}
			style={styles.outerContainer}
		>
			{innerContent}
		</Pressable>
	);
}
