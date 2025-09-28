import { Image, Pressable, StyleSheet, View } from 'react-native';
import { images } from '@/src/constants/dummyImages';
import { BlurView } from 'expo-blur';
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
export default function ImageInfoModal() {
	const interactionStore = useInteractionStore();
	const { open, props } = interactionStore.modalsInteracted.imageInfo;
	const { entryId } = props || {};

	const colors = useColors();
	const backgroundColor = getColorWithOpacity(colors.primary900, 0.5);
	const data =
		dummyChallengeData.entries.find((entry) => entry.entryId === entryId) ||
		dummyChallengeHistory
			.flatMap((challenge) => challenge.winners)
			.find((winner) => winner.entryId === entryId);

	const imageLink = images.find(
		(image) => image.imageId === data?.imageId
	)?.link;

	const aspectRatio = useAspectRatio(imageLink);
	const closeModal = () => {
		interactionStore.setModalOpen('imageInfo', false);
	};
	if (!open) return null;
	const styles = ImageInfoModalStyles;
	return (
		<BlurView
			style={[styles.outerContainer, { backgroundColor }]}
			tint='dark'
			intensity={10}
			experimentalBlurMethod='dimezisBlurView'
		>
			<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
			<Image
				source={{
					uri: imageLink,
				}}
				style={[styles.image, { aspectRatio }]}
				resizeMode='contain'
			/>
			<View style={styles.innerContainer}>
				<ProfileInfo userId={data?.userId} />
				<View>
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
						<Text style={styles.text}>{data?.rank}</Text>
						<CustomIcon size={19} svg={<TrophySVG />} />
					</View>
				</View>
			</View>
		</BlurView>
	);
}
