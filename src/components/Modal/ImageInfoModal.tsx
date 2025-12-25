import { Image, Pressable, StyleSheet, View } from 'react-native';
import { images } from '@/src/constants/dummyImages';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { dummyChallengeHistory } from '@/src/constants/dummyChallengeHistory';
import ProfileInfo from '../Home/ProfileInfo';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { getColorWithOpacity } from '@/src/utils/color';
import { useColors } from '@/src/hooks/useColors';
import CustomIcon from '../UI/CustomIcon';
import { TrophySVG } from '@/src/constants/svgs';
import { Text } from '../Themed';
import { ImageInfoModalStyles } from './ModalStyles';
import CustomButton from '../UI/CustomButton';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';
import { dummyUsers } from '@/src/constants/dummyUsers';
export default function ImageInfoModal() {
	const interactionStore = useInteractionStore();
	const { open, props } = interactionStore.modalsInteracted.imageInfo;
	const { entryId } = props || {};
	const colors = useColors();
	const backgroundColor = getColorWithOpacity('#000000', 0.35);
	const data =
		dummyChallengeData.entries.find((entry) => entry.entryId === entryId) ||
		dummyChallengeHistory
			.flatMap((challenge) => challenge.winners)
			.find((winner) => winner.entryId === entryId) ||
		dummyUsers
			.flatMap((user) => user.stats.attendedChallenges)
			.find((entry) => entry!.entryId === entryId);

	const imageLink = images.find(
		(image) => image.imageId === data?.imageId
	)?.link;

	const aspectRatio = useAspectRatio(imageLink);
	const closeModal = () => {
		interactionStore.setModalOpen('imageInfo', false);
	};
	if (!open) return null;
	const styles = ImageInfoModalStyles;
	const onDownloadPress = async () => {
		try {
			if (!imageLink) return;
			const { status } = await MediaLibrary.requestPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert(
					'Permission required',
					'Allow storage permission to download images.'
				);
				return;
			}
			const fileUri = FileSystem.cacheDirectory + `download_${Date.now()}.jpg`;
			const { uri } = await FileSystem.downloadAsync(imageLink, fileUri);
			const asset = await MediaLibrary.createAssetAsync(uri);
			await MediaLibrary.createAlbumAsync('Download', asset, false);
		} catch (error) {
			console.log('Download error:', error);
			Alert.alert('Error', 'Failed to download image.');
		}
	};
	return (
		<View style={[styles.outerContainer, { backgroundColor }]}>
			<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
			<View>
				<CustomButton
					type='icon'
					onPress={onDownloadPress}
					outerContainerStyle={styles.downloadButton}
					tintedBackground={{
						color: colors.primary800,
						opacity: 0.3,
						type: 'circular',
					}}
					icon={({ color }) => (
						<CustomIcon
							collectionKey='fe'
							name='download'
							color={color}
							size={22}
						/>
					)}
				/>
				<Image
					source={{
						uri: imageLink,
					}}
					style={[styles.image, { aspectRatio }]}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.innerContainer}>
				<ProfileInfo userId={data?.userId} />
				{Array.isArray(data?.rank) && data.rank[0] && data.likes && (
					<View style={styles.statsOuterContainer}>
						<View style={styles.statsContainer}>
							<Text style={styles.text}>{data?.likes.length}</Text>
							<CustomIcon
								size={19}
								color={colors.accentRed}
								collectionKey='oct'
								name='heart-fill'
							/>
						</View>
						<View style={styles.statsContainer}>
							<Text style={styles.text}>{data?.rank[0]}</Text>
							<CustomIcon size={19} svg={<TrophySVG />} />
						</View>
					</View>
				)}
			</View>
		</View>
	);
}
