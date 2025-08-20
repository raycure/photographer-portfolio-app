import { images } from '@/src/constants/dummyImages';
import { Image, Pressable } from 'react-native';
import { ChallengeHistoryBlockItemStyles } from './ChallengeHistoryStyles';
import { ChallengeHistoryBlockItemProps } from './ChallengeHistoryTypes';
export default function ChallengeHistoryBlockItem({
	entry,
}: ChallengeHistoryBlockItemProps) {
	const styles = ChallengeHistoryBlockItemStyles;
	return (
		<Pressable style={styles.outerContainer}>
			<Image
				source={{
					uri: images.find((image) => {
						return image.imageId === entry.imageId;
					})?.link,
				}}
				style={styles.image}
			/>
		</Pressable>
	);
}
