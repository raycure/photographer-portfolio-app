import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { images } from '@/src/constants/dummyImages';
import { BlurView } from 'expo-blur';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { dummyChallengeHistory } from '@/src/constants/dummyChallengeHistory';
import { useLocalSearchParams } from 'expo-router';
import ProfileInfo from '../Home/ProfileInfo';
import getAspectRatio from '@/src/utils/getAspectRatio';
const windowWidth = Dimensions.get('window').width;
export default function ImageInfoModal() {
	const { entryId } = useLocalSearchParams();
	const data =
		dummyChallengeData.entries.find((entry) => {
			return entry.entryId === entryId;
		}) ||
		dummyChallengeHistory
			.flatMap((challenge) => challenge.winners)
			.find((winner) => winner.entryId === entryId);

	const imageLink = images.find(
		(image) => image.imageId === data?.imageId
	)?.link;
	const aspectRatio = getAspectRatio(imageLink);
	return (
		<BlurView
			style={styles.outerContainer}
			//tint='dark'
			//experimentalBlurMethod='dimezisBlurView'
		>
			<Image
				source={{
					uri: imageLink,
				}}
				style={[styles.image, { aspectRatio }]}
				resizeMode='contain'
			/>
			<View style={styles.innerContainer}>
				<ProfileInfo userId={data?.userId} />
				<Text>a</Text>
			</View>
		</BlurView>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16,
		padding: 16,
	},
	innerContainer: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: { width: windowWidth - 32 },
});
