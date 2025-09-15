import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';
import FollowersButton from '../UI/FollowersButton';
import { headerStyles } from './ProfileStyles';
import { useColors } from '@/src/hooks/useColors';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import CircularPhoto from '../UI/CircularPhoto';
import { images } from '@/src/constants/dummyImages';

export default function ProfileHeader() {
	const colors = useColors();
	const data = useContext(UserContext);
	const styles = headerStyles;
	const imageLink = images.find(
		(image) => image.imageId === data.personalInfo.imageId
	)?.link;
	return (
		<View style={styles.outerContainer}>
			<View>
				{data.personalInfo.premium && (
					<CustomIcon
						style={styles.premiumIcon}
						collectionKey='fa6'
						name='crown'
						size={18}
						color={colors.accentOrange}
					/>
				)}
				<CircularPhoto source={imageLink} size='medium' />
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{data.personalInfo.name}</Text>
				<View style={styles.lowerContainer}>
					<Text style={[styles.text, { color: colors.gray200 }]}>
						@{data.personalInfo.username}
					</Text>
					<FollowersButton />
				</View>
			</View>
		</View>
	);
}
